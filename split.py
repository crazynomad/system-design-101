import os
import re
import shutil
from markdown_it import MarkdownIt

# 定义不允许使用的字符和对应的替换字符串
CHARACTER_MAP = {
    '\\': '_bs_',   # 反斜杠
    '/': '_fs_',    # 正斜杠
    ':': '_c_',     # 冒号
    '*': '_a_',     # 星号
    '?': '_q_',     # 问号
    '"': '_dq_',    # 双引号
    '<': '_lt_',    # 小于号
    '>': '_gt_',    # 大于号
    '|': '_p_',     # 管道符
    ' ': '_s_',     # 空格
    '.': '_dot_',   # 点
    '%': '_perc_'   # 百分号
}

REVERSE_CHARACTER_MAP = {v: k for k, v in CHARACTER_MAP.items()}

def sanitize_filename(filename: str) -> str:
    for char, replacement in CHARACTER_MAP.items():
        filename = filename.replace(char, replacement)
    return filename

def unsanitize_filename(sanitized_filename: str) -> str:
    for replacement, char in REVERSE_CHARACTER_MAP.items():
        sanitized_filename = sanitized_filename.replace(replacement, char)
    return sanitized_filename

def update_image_paths(content):
    return re.sub(r'<img src="images/(.*?)"', r'<img src="../images/\1"', content)

def clean_previous_chapters(base_dir):
    for item in os.listdir(base_dir):
        item_path = os.path.join(base_dir, item)
        if os.path.isdir(item_path) and item.startswith("Chapter"):
            shutil.rmtree(item_path)

def parse_markdown_and_split_sections(file_path: str):
    base_dir = 'docs'
    if os.path.exists(base_dir):
        clean_previous_chapters(base_dir)
    else:
        os.makedirs(base_dir)

    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    lines = content.splitlines()
    
    current_folder_path = None
    section_content = []
    h2_count = 0
    h3_count = 0
    current_h2_title = None
    current_h3_title = None
    in_code_block = False

    for line in lines:
        stripped_line = line.strip()

        # 切换代码块状态
        if stripped_line.startswith("```"):
            in_code_block = not in_code_block

        # 跳过代码块中的标题处理
        if in_code_block:
            section_content.append(line + '\n')
            continue

        # 处理 h2 标题 (##)
        if stripped_line.startswith('## ') and not in_code_block:
            if current_folder_path:
                # 写入上一个 h2 部分的内容到 index.md
                if current_h3_title:
                    write_section(current_folder_path, sanitize_filename(current_h3_title), section_content, h3_count, current_h3_title)
                else:
                    write_section(current_folder_path, 'index', section_content, None, current_h2_title)
            section_content = []

            h2_count += 1
            h3_count = 0
            current_h2_title = stripped_line.lstrip('#').strip()
            sanitized_h2_title = sanitize_filename(current_h2_title)
            current_folder = f"Chapter{h2_count}.{sanitized_h2_title}"
            current_folder_path = os.path.join(base_dir, current_folder)
            os.makedirs(current_folder_path, exist_ok=True)

            # 开始捕获新 h2 部分的内容
            section_content.append(f"# {current_h2_title}\n\n")  # 将 h2 转换为 h1
            current_h3_title = None  # 重置 h3 标题

        # 处理 h3 标题 (###)
        elif stripped_line.startswith('### ') and not in_code_block:
            if section_content and current_h3_title:
                # 保存上一个 h3 部分的内容
                write_section(current_folder_path, sanitize_filename(current_h3_title), section_content, h3_count, current_h3_title)
            elif section_content and not current_h3_title:
                # 如果 h2 下有内容，但没有 h3 标题，则保存到 index.md
                write_section(current_folder_path, 'index', section_content, None, current_h2_title)
            section_content = []

            h3_count += 1
            current_h3_title = stripped_line.lstrip('#').strip()
            section_content.append(f"# {current_h3_title}\n\n")  # 将 h3 转换为 h1

        else:
            # 收集当前部分的内容
            section_content.append(line + '\n')

    # 写入最后的部分 (无论是 h2 还是 h3)
    if current_folder_path:
        if current_h3_title and section_content:
            write_section(current_folder_path, sanitize_filename(current_h3_title), section_content, h3_count, current_h3_title)
        elif section_content:
            write_section(current_folder_path, 'index', section_content, None, current_h2_title)

    return base_dir

def write_section(folder, title, content, count, original_title=None):
    file_name = f"{count}.{title}.md" if title != 'index' else "index.md"
    file_path = os.path.join(folder, file_name)
    updated_content = update_image_paths(''.join(content).strip())
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)

# 示例使用
file_path = 'README-striped.md'  # 替换为你实际的文件路径
split_dir = parse_markdown_and_split_sections(file_path)

print(f"文件已拆分并保存到: {split_dir}")
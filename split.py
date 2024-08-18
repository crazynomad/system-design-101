import os
import re
import shutil

from markdown_it import MarkdownIt

# 定义不允许使用的字符和对应的替换字符串
CHARACTER_MAP = {
    '\\': '_bs_',   # backslash
    '/': '_fs_',    # forward slash
    ':': '_c_',     # colon
    '*': '_a_',     # asterisk
    '?': '_q_',     # question mark
    '"': '_dq_',    # double quote
    '<': '_lt_',    # less than
    '>': '_gt_',    # greater than
    '|': '_p_',     # pipe
    ' ': '_s_',     # space (optional, for safety)
    '.': '_dot_',   # dot (optional, to avoid hidden files in Unix)
    '%': '_perc_'   # percent sign
}

# 反向映射
REVERSE_CHARACTER_MAP = {v: k for k, v in CHARACTER_MAP.items()}

def sanitize_filename(filename: str) -> str:
    """Replace unsafe characters in the filename with safe equivalents."""
    # Replace each unsafe character using the CHARACTER_MAP
    for char, replacement in CHARACTER_MAP.items():
        filename = filename.replace(char, replacement)
    return filename

def unsanitize_filename(sanitized_filename: str) -> str:
    """Reverse the sanitization process to recover the original filename."""
    # Replace each safe equivalent back to the original character
    for replacement, char in REVERSE_CHARACTER_MAP.items():
        sanitized_filename = sanitized_filename.replace(replacement, char)
    return sanitized_filename


def update_image_paths(content):
    """Update image paths in the markdown content."""
    return re.sub(r'<img src="images/(.*?)"', r'<img src="../images/\1"', content)

def clean_previous_chapters(base_dir):
    """Clean up previous Chapter directories."""
    for item in os.listdir(base_dir):
        item_path = os.path.join(base_dir, item)
        if os.path.isdir(item_path) and item.startswith("Chapter"):
            shutil.rmtree(item_path)

def split_markdown(file_path):
    # Set the base directory to 'docs'
    base_dir = 'docs'
    if os.path.exists(base_dir):
        clean_previous_chapters(base_dir)
    else:
        os.makedirs(base_dir)

    # Read the Markdown file content
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Use markdown-it-py to parse the Markdown document
    md = MarkdownIt()
    tokens = md.parse(content)
    
    current_folder_path = None
    section_content = []
    h2_count = 0
    h3_count = 0
    h3_title = None
    original_h3_title = None
    readme_content = []
    h3_found = False
    current_h2_title = None
    original_h2_title = None
    skip_next_inline = False

    for token in tokens:
        if token.type == 'heading_open':
            level = int(token.tag.strip('h'))
            if level == 2:
                # Save previous h2 section and index.md before starting new one
                if current_folder_path:
                    if readme_content and any(readme_content):  # Only write index.md if it has valid content
                        write_section(current_folder_path, 'index', readme_content, None, original_h2_title)
                        readme_content = []
                    if section_content:
                        write_section(current_folder_path, h3_title, section_content, h3_count, original_h3_title)
                        section_content = []

                # Increment the h2 counter and create a new folder
                h2_count += 1
                h3_count = 0  # Reset h3 counter for new h2 section
                h3_found = False
                current_h2_title = tokens[tokens.index(token) + 1].content.strip()
                original_h2_title = current_h2_title  # Save the original title for h1 insertion
                sanitized_h2_title = sanitize_filename(current_h2_title)
                current_folder = f"Chapter{h2_count}.{sanitized_h2_title}"
                current_folder_path = os.path.join(base_dir, current_folder)
                os.makedirs(current_folder_path, exist_ok=True)
                skip_next_inline = True

            elif level == 3:
                # Save previous h3 section before starting new one
                if section_content:
                    write_section(current_folder_path, h3_title, section_content, h3_count, original_h3_title)
                    section_content = []
                
                h3_count += 1  # Increment h3 counter
                original_h3_title = tokens[tokens.index(token) + 1].content.strip()  # Save original h3 title
                h3_title = sanitize_filename(original_h3_title)
                h3_found = True
                skip_next_inline = True

        elif token.type == 'inline':
            # Skip the inline token immediately following the heading (which contains the title)
            if skip_next_inline:
                skip_next_inline = False
                continue
            if h3_found:
                section_content.append(token.content)
            else:
                readme_content.append(token.content)

        elif token.type == 'heading_close':
            continue
        else:
            # Keep original content in section
            if h3_found:
                section_content.append(token.content)
            else:
                readme_content.append(token.content)

    # Save the last section content
    if current_folder_path:
        if readme_content and any(readme_content):  # Only write index.md if it has valid content
            write_section(current_folder_path, 'index', readme_content, None, original_h2_title)
        if section_content:
            write_section(current_folder_path, h3_title, section_content, h3_count, original_h3_title)

    return base_dir

def write_section(folder, title, content, count, original_title=None):
    """Write a section to a markdown file."""
    if title == 'index':
        file_name = f"{title}.md"
        if original_title:  # Insert the original H2 title as H1 at the top for index.md
            content.insert(0, f"# {original_title}\n\n")
    else:
        file_name = f"{count}.{title}.md"
        if original_title:  # Insert the original H3 title as H1 at the top
            content.insert(0, f"# {original_title}\n\n")
    
    file_path = os.path.join(folder, file_name)
    # Join content and update image paths
    updated_content = update_image_paths(''.join(content).strip())
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)

# Example usage
file_path = 'README-striped.md'  # Replace with your actual file path
split_dir = split_markdown(file_path)

print(f"Files have been split and saved in: {split_dir}")
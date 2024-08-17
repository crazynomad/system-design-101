import os
import re
import json

def natural_sort_key(s):
    """Sort string in a natural order."""
    return [int(text) if text.isdigit() else text.lower() for text in re.split(r'(\d+)', s)]

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

def extract_title_from_markdown(filepath):
    """Extract the first h1, h2, or h3 title from a markdown file."""
    with open(filepath, 'r', encoding='utf-8') as file:
        for line in file:
            match = re.match(r'^(#{1,3})\s*(.*)', line)
            if match:
                return match.group(2).strip()
    return os.path.basename(filepath)  # Fallback to filename if no title found

def generate_structure(docs_path):
    """Generate a structure representing the docs folder and its subfolders."""
    structure = []

    # List directories in natural sorted order
    for folder_name in sorted(os.listdir(docs_path), key=natural_sort_key):
        folder_path = os.path.join(docs_path, folder_name)

        # Ignore directories starting with '.' and the 'images' folder
        if os.path.isdir(folder_path) and not folder_name.startswith('.') and folder_name != "images":
            folder_items = []
            folder_link = folder_name + "/"  # Default link to the folder

            # List files in natural sorted order within each directory
            for file_name in sorted(os.listdir(folder_path), key=natural_sort_key):
                if file_name.endswith('.md'):
                    original_path = os.path.join(folder_name, file_name).replace("\\", "/")
                    
                    # No renaming, just sanitize the file name if needed
                    sanitized_file_name = file_name
                    sanitized_path = os.path.join(folder_name, sanitized_file_name).replace("\\", "/")
                    
                    if sanitized_file_name.lower() == "readme.md":
                        folder_link = sanitized_path  # Update link for the folder with README.md
                    else:
                        # Extract the title from the markdown file
                        full_path = os.path.join(docs_path, sanitized_path)
                        title = extract_title_from_markdown(full_path)
                        folder_items.append({
                            "text": title,
                            "link": sanitized_path
                        })

            # Append folder structure with collapsed: true
            structure.append({
                "text": unsanitize_filename(folder_name),  # Reverse sanitize and remove 'ChapterX.' prefix
                "link": folder_link,  # Folder path or README.md as link
                "items": folder_items,
                "collapsed": True  # Set collapsed: true for each folder node
            })

    return structure

def save_to_theme_config(structure, output_path):
    """Save the structure to a themeConfig.json file."""
    theme_config = {
        "sidebar": structure
    }

    os.makedirs(os.path.dirname(output_path), exist_ok=True)  # Ensure the directory exists
    with open(output_path, 'w', encoding='utf-8') as output_file:
        json.dump(theme_config, output_file, indent=2, ensure_ascii=False)

def main():
    docs_path = 'docs'  # Path to your docs folder
    output_path = 'docs/themeConfig.json'  # Path to save themeConfig.json

    # Generate structure based on the docs folder
    structure = generate_structure(docs_path)

    # Save the final structure to themeConfig.json
    save_to_theme_config(structure, output_path)

    print(f"themeConfig.json has been generated and saved to: {output_path}")

if __name__ == '__main__':
    main()
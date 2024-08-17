import os
import re
import shutil
from markdown_it import MarkdownIt

def sanitize_filename(filename):
    """Remove or replace characters that are not allowed in filenames."""
    filename = re.sub(r'[\\/*?:"<>|]', '_', filename)
    filename = filename.replace(' ', '_')  # Replace spaces with underscores
    filename = filename.replace('/', '_')  # Replace slashes with underscores
    return filename

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
    index_content = []
    h3_found = False
    current_h2_title = None

    for token in tokens:
        if token.type == 'heading_open':
            level = int(token.tag.strip('h'))
            if level == 2:
                # Save previous h2 section and index before starting new one
                if current_folder_path:
                    if index_content:
                        # Add the current H2 title to the top of index.md content
                        index_content.insert(0, f"# {current_h2_title}\n\n")
                        write_section(current_folder_path, 'index', index_content, 0)
                        index_content = []
                    if section_content:
                        write_section(current_folder_path, h3_title, section_content, h3_count)
                        section_content = []

                # Increment the h2 counter and create a new folder
                h2_count += 1
                h3_count = 0  # Reset h3 counter for new h2 section
                h3_found = False
                current_h2_title = tokens[tokens.index(token) + 1].content.strip()
                sanitized_h2_title = sanitize_filename(current_h2_title)
                current_folder = f"Chapter{h2_count}.{sanitized_h2_title}"
                current_folder_path = os.path.join(base_dir, current_folder)
                os.makedirs(current_folder_path, exist_ok=True)
            
            elif level == 3:
                # Save previous h3 section before starting new one
                if section_content:
                    write_section(current_folder_path, h3_title, section_content, h3_count)
                    section_content = []
                
                h3_count += 1  # Increment h3 counter
                h3_title = sanitize_filename(tokens[tokens.index(token) + 1].content.strip())
                h3_found = True

                # Add the h2 equivalent of the h3 title to the content
                section_content.append(f"## {tokens[tokens.index(token) + 1].content.strip()}\n")

        elif token.type == 'inline':
            if h3_found:
                # Only append content that is not the h3 title
                if token.content.strip() != h3_title:
                    section_content.append(token.content)
            else:
                # Content before the first h3 goes into index.md
                index_content.append(token.content)

        elif token.type == 'heading_close':
            continue
        else:
            # Keep original content in section
            if h3_found:
                section_content.append(token.content)
            else:
                index_content.append(token.content)

    # Save the last section content
    if current_folder_path:
        if index_content:
            # Add the current H2 title to the top of index.md content
            index_content.insert(0, f"# {current_h2_title}\n\n")
            write_section(current_folder_path, 'index', index_content, 0)
        if section_content:
            write_section(current_folder_path, h3_title, section_content, h3_count)

    return base_dir

def write_section(folder, title, content, count):
    # Ensure the title exists for creating a valid file name
    file_name = f"{count}.{title if title != 'index' else title}.md"
    file_path = os.path.join(folder, file_name)
    # Join content and update image paths
    updated_content = update_image_paths(''.join(content).strip())
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)

# Example usage
file_path = 'README-striped.md'  # Replace with your actual file path
split_dir = split_markdown(file_path)

print(f"Files have been split and saved in: {split_dir}")
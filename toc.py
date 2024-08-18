import json
import os

def generate_toc(theme_config_path, toc_output_path):
    """Generate a TOC.md file based on the sidebar structure in themeConfig.json."""
    with open(theme_config_path, 'r', encoding='utf-8') as file:
        theme_config = json.load(file)

    sidebar = theme_config.get('sidebar', [])
    toc_lines = []

    for section in sidebar:
        # Add the folder name as an H2 header
        toc_lines.append(f"## {section['text']}\n")
        
        # Add each file in the folder as an ordered list
        for index, item in enumerate(section.get('items', []), start=1):
            toc_lines.append(f"{index}. [{item['text']}]({item['link']})\n")
        
        toc_lines.append("\n")  # Add a newline after each section

    # Write the TOC to the output file
    with open(toc_output_path, 'w', encoding='utf-8') as toc_file:
        toc_file.writelines(toc_lines)

    print(f"TOC.md has been generated and saved to: {toc_output_path}")

def main():
    theme_config_path = 'docs/.vitepress/themeConfig.json'  # Path to your themeConfig.json
    toc_output_path = 'docs/toc.md'  # Path to save the generated TOC.md

    # Generate the TOC based on the themeConfig.json
    generate_toc(theme_config_path, toc_output_path)

if __name__ == '__main__':
    main()
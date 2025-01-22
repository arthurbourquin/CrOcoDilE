import os

def remove_leading_spaces(lines):
    # Remove leading spaces from each line
    return [line.lstrip() for line in lines]

def remove_quotes(lines):
    # Remove all double quotes from each line
    return [line.replace('"', '') for line in lines]

def keep_only_starting_with(lines, word1, word2):
    # Keep only lines that start with the specified word
    return [line for line in lines if (line.startswith(word1) or line.startswith(word2))]

def main(file_path):
    # Check if the file exists
    if not os.path.isfile(file_path):
        print("File not found. Please check the path and try again.")
        return

    # Read file line by line
    with open(file_path, 'r') as file:
        lines = file.readlines()

    # Remove leading spaces and filter lines
    lines = remove_leading_spaces(lines)
    lines = remove_quotes(lines)
    lines = keep_only_starting_with(lines, 'name', 'time')

    # Create new file name with '_filtered.txt' suffix
    base_name, _ = os.path.splitext(file_path)
    new_file_path = f"ouais3"
    
    # Save the filtered lines to the new file
    with open(new_file_path, 'w') as file:
        file.writelines(lines)

    print(f"File saved as {new_file_path}")

# Prompt user for file path and run the function
file_path = input("Enter the path to your JSON file (e.g., /path/to/file.json): ").strip()
main(file_path)

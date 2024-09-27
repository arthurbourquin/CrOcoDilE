import os

# Define the replacement dictionary
replacements = {
    'Ã¡': 'á',
    'Ã¢': 'â',
    'Ã£': 'ã',
    'Ã¤': 'ä',
    'Ã¥': 'å',
    'Ã¦': 'æ',
    'Ã§': 'ç',
    'Ã¨': 'è',
    'Ã©': 'é',
    'Ãª': 'ê',
    'Ã«': 'ë',
    'Ã¬': 'ì',
    'Ã­': 'í',
    'Ã®': 'î',
    'Ã¯': 'ï',
    'Ã°': 'ð',
    'Ã±': 'ñ',
    'Ã²': 'ò',
    'Ã³': 'ó',
    'Ã´': 'ô',
    'Ãµ': 'õ',
    'Ã¶': 'ö',
    'Ã¸': 'ø',
    'Ã¹': 'ù',
    'Ãº': 'ú',
    'Ã»': 'û',
    'Ã¼': 'ü',
    'Ã½': 'ý',
    'Ã¾': 'þ',
    'Ã¿': 'ÿ',
    'Ã€': 'À',
    'Ã': 'Á',
    'Ã‚': 'Â',
    'Ãƒ': 'Ã',
    'Ã„': 'Ä',
    'Ã…': 'Å',
    'Ã†': 'Æ',
    'Ã‡': 'Ç',
    'Ãˆ': 'È',
    'Ã‰': 'É',
    'ÃŠ': 'Ê',
    'Ã‹': 'Ë',
    'ÃŒ': 'Ì',
    'Ã': 'Í',
    'ÃŽ': 'Î',
    'Ã': 'Ï',
    'Ã': 'Ð',
    'Ã‘': 'Ñ',
    'Ã’': 'Ò',
    'Ã“': 'Ó',
    'Ã”': 'Ô',
    'Ã•': 'Õ',
    'Ã–': 'Ö',
    'Ã˜': 'Ø',
    'Ã™': 'Ù',
    'Ãš': 'Ú',
    'Ã›': 'Û',
    'Ãœ': 'Ü',
    'Ã': 'Ý'
}


def replace_in_file(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Perform the replacements
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    # Write the updated content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

def main():
    # Ask the user for the file path
    directory = input("Enter the directory path where the file is located: ").strip()
    if not os.path.isdir(directory):
        print("Invalid directory path.")
        return

    # Ask the user for the file name with extension
    file_name = input("Enter the file name with extension (e.g., file.txt): ").strip()
    file_path = os.path.join(directory, file_name)
    
    if not os.path.isfile(file_path):
        print("File does not exist.")
        return
    
    # Perform the replacement
    replace_in_file(file_path)
    print(f"Replacements have been made in the file: {file_path}")

if __name__ == "__main__":
    main()

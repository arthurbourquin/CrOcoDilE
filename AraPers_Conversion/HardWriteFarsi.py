# Import the reshape function from arabic_reshaper
from arabic_reshaper import reshape

# Function to reshape Farsi text
def reshape_farsi(text):
    return reshape(text)

# Main execution
if __name__ == "__main__":
    print("Enter your input (type 'END' on a new line to finish):")
    lines = []
    while True:
        line = input()
        if line == 'END':
            break
        lines.append(line)

    multi_line_input = "\n".join(lines)
    
    # Reshape the user-provided text
    reshaped_text = reshape_farsi(multi_line_input)
    
    # Print the reshaped text
    print("Reshaped text:\n", reshaped_text)

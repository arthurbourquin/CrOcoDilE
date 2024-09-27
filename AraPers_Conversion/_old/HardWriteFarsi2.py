# Import the reshape function from arabic_reshaper
from arabic_reshaper import reshape

# Function to reshape Farsi text
def reshape_farsi(text):
    return reshape(text)

# Main execution
if __name__ == "__main__":
    # Ask the user for input
    input_text = input("Enter Persian text: ")
    
    # Reshape the user-provided text
    reshaped_text = reshape_farsi(input_text)
    
    # Print the reshaped text
    print("Reshaped text:", reshaped_text)

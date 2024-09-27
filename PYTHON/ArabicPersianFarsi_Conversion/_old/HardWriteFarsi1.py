# Import the reshape function from arabic_reshaper
from arabic_reshaper import reshape

# Function to reshape Farsi text
def reshape_farsi(text):
    return reshape(text)

# Example usage
if __name__ == "__main__":
    input_text = "این تست"
    reshaped_text = reshape_farsi(input_text)
    print(reshaped_text)

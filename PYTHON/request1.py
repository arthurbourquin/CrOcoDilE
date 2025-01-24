import urllib.request

# URL of the image
url = "https://arthurbourquin.ch/OuaisLesMedias/XWing.png"

# Path where the image will be saved
output_path = "XWing.png"

# Download the image
try:
    urllib.request.urlretrieve(url, output_path)
    print(f"Image successfully downloaded and saved to {output_path}")
except Exception as e:
    print(f"An error occurred: {e}")

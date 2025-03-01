import urllib.request
import os

# Function to download images
def download_image(image_url, save_path):
    try:
        urllib.request.urlretrieve(image_url, save_path)
        print(f"Downloaded: {save_path}")
    except Exception as e:
        print(f"Error downloading {image_url}: {e}")

# Directory to save images
download_directory = 'downloaded_images_2'
if not os.path.exists(download_directory):
    os.makedirs(download_directory)

# Base URL and pattern for image names
base_url = "oléurl/"

for i in range(0, 170):
    image_number = str(i)
    image_url = f"{base_url}{image_number}.jpg"
    save_path = os.path.join(download_directory, f"YWing_{image_number}.jpg")
    
    # Download the image
    download_image(image_url, save_path)



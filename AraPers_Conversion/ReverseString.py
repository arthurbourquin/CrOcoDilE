# Initialize an empty list to store the lines
lines = []

print("Enter lines of text. Type 'END' on a new line to finish:")

while True:
    line = input()
    if line == "END":
        break
    # Reverse the line and add it to the list
    lines.append(line[::-1])

# Output the reversed lines
for reversed_line in lines:
    print(reversed_line)

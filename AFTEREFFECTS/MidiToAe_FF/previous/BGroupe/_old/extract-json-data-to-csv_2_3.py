import json

def read_json(input_file):
    try:
        with open(input_file, 'r') as file:
            data = json.load(file)
            return data
    except json.JSONDecodeError:
        print("Error: The JSON file is not properly formatted.")
        return None
    except FileNotFoundError:
        print("Error: The file was not found.")
        return None

def write_json(output_file, data):
    try:
        with open(output_file, 'w') as file:
            json.dump(data, file, indent=4)
        print("Data successfully written to", output_file)
    except Exception as e:
        print("Error writing to file:", e)

output_file = 'output2-4.txt'

print("---")

data = read_json('j.json')
score = []
for i in range(len(data['tracks'])):
    track = {'name': data['tracks'][i]['name'], 'occurences': []}
    if len(data['tracks'][i]['notes']) != 0:
        for note in data['tracks'][i]['notes']:
            track['occurences'].append(note['time'])  # Extract 'time' from each note
    score.append(track)
print(score)



print("---")



truc = ["ouais"]
for i in range(10):
    truc.append(i)
print(truc)



"""
Ça ça devrait marcher mais faut modifier, data existe pas
write_json(output_file, data)
"""
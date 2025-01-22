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

data = read_json('j.json')
score = []
for i in range(len(data['tracks'])):
    track = {'name': data['tracks'][i]['name'], 'occurences': []}
    if len(data['tracks'][i]['notes']) != 0:
        for note in data['tracks'][i]['notes']:
            track['occurences'].append(note['time'])  # Extract 'time' from each note
    score.append(track)

print(score)

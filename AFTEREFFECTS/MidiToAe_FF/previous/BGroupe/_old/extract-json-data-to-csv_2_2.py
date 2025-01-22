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

def get_minimal_music_score(data):
    output_tracks = []
    for i in range(len(data['tracks'])):
        output_track = {'name': "", 'played_at': []}
        output_track['name'] = data['tracks'][i]['name']
        for j in range(len(data['tracks'][i]['notes'])):
            output_track['played_at'].append(data['tracks'][i]['notes'][j]['time'])
        output_tracks.append(output_track)
    return output_tracks

input_file = 'j.json'
output_file = 'output2-4.txt'

print("---")
for i in range(len(read_json('j.json')['tracks'])):
    print(read_json('j.json')['tracks'][i]['name'])
    if(len(read_json('j.json')['tracks'][i]['notes']) != 0):
        for j in range(len(read_json('j.json')['tracks'][i]['notes'])):
            print(read_json('j.json')['tracks'][i]['notes'][j]['time'])
print("---")

data = read_json(input_file)


minimal_music_score = get_minimal_music_score(data)

if data:
    write_json(output_file, data)

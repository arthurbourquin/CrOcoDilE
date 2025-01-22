import json

def write_json(output_file, data):
    try:
        with open(output_file, 'w') as file:
            json.dump(data, file, indent=4)
        print("Data successfully written to", output_file)
    except Exception as e:
        print("Error writing to file:", e)


def extract_data(data):
    score = []
    for i in range(len(data['tracks'])):
        track = {'name': data['tracks'][i]['name'], 'occurences': []}
        if len(data['tracks'][i]['notes']) != 0:
            for note in data['tracks'][i]['notes']:
                track['occurences'].append(note['time'])
        score.append(track)
    return score


write_json('minimal_score_3.json', extract_data(json.load(open('j.json', 'r'))))
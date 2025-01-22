import json

current_data = json.load(open('j.json', 'r'))

def write_json(output_file, data):
    try:
        with open(output_file, 'w') as file:
            json.dump(data, file, indent=4)
        print("Data successfully written to", output_file)
    except Exception as e:
        print("Error writing to file:", e)

def keep_only_name_and_occurences(data):
    score = []
    for i in range(len(data['tracks'])):
        track = {'name': data['tracks'][i]['name'], 'occurences': []}
        if len(data['tracks'][i]['notes']) != 0:
            for note in data['tracks'][i]['notes']:
                track['occurences'].append(note['time'])
        score.append(track)
    return score

def remove_empty_sets(data):
    return [obj for obj in data if obj.get('name') != ""]    

def merge_double_sets(data):
    merged_data = {}
    for item in data:
        name = item['name']
        if name in merged_data:
            merged_data[name]['occurences'].extend(item['occurences'])
        else:
            merged_data[name] = {'name': name, 'occurences': item['occurences']}
    return list(merged_data.values())

current_data = keep_only_name_and_occurences(current_data)
current_data = remove_empty_sets(current_data)
current_data = merge_double_sets(current_data)

write_json('minimal_score_5.json', current_data)
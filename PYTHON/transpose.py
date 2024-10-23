def transpose_table():
    print("Enter your table data row by row (comma-separated values). Enter an empty line to stop.")
    
    data = []
    while True:
        row = input()
        if row == "":
            break
        data.append(row.split(','))

    # Transpose the data
    transposed_data = list(zip(*data))

    # Print the transposed data
    for row in transposed_data:
        print(','.join(row))

transpose_table()
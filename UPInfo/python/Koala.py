k = int(input('Combien de koala(s) ? '))

for i in range(k):
    if i == 0:
        s = ''
    else:
        s = 's'
    print(str(i + 1), 'koala' + s)
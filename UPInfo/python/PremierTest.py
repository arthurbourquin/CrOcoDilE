a = []
i = 0
s = 's'
while i <=10:
    k = 'koala'
    if i==0:
        s = ''
    else:
        s = 's'
    a.append(str(i + 1) + ' koala' + s)
    i = i + 1
print(a)
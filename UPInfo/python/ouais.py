from random import randint

s1 = [
    '00yS--- ddlog.k2.....[',
    'Data-Log: ###-###....[',
    'Console..............[',
    'Def-Par_TT...........[',
    ' --KDor..............[',
    '.....................[',
    '777Gate..............[',
    'returnIn.............[',
    'returnIn >loop.......[',
    'RESET-OPT--K622......['
    ]
s2 = [
    'ModOut      ',
    'Cal         ',
    'deg         ',
    'parseMount  ',
    'DEF-DEF-i   '
    ]
s3 = ['    ', '    ', '/   ', '<<  ', '*!  ']

ni = randint(0, 15)
for i in range (ni):
    print('\n' + s1[randint(0, 9)])
    nj = randint(2, 9)
    for j in range(nj):
        a = str(randint(0, 9999))
        b = str(randint(200, 750))
        c = str(randint(0, 20))
        print('--- ' + s2[randint(0, 4)] + ' - ' + s3[randint(0, 4)] + b + '-' + c)
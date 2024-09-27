x = input("Entrez un entier et je vous dis ce que c'est:\n")
x = float(x)

if x < 0:
    print(int(x)," est négatif")
elif x % 2 != 0:
    print(int(x)," est impaire")
else:
    print(int(x)," est positif et paire")

print('Je suis trop fort... je suis un ordi')
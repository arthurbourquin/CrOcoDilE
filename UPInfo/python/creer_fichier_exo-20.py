f = open("truc.txt", "w", encoding="utf-8") # "w" ca créer ou écraser le fichier

s = "toto\n"

for i in range(4):
    f.write(s)

f.close()

"""
WIP
"""

name = input("Nom du fichier (avec extension)")

f = open(name, "w", encoding="utf-8") # "w" ca créer ou écraser le fichier

s = "Ceci est un test de création de fichier, cette ligne est répétée 4 foix.\n"

for i in range(4):
    f.write(s)

f.close()

f = open("toto.txt", "r", encoding="utf-8")

s = f.readline()
while s:
    print(s, end="") # end="" va remplacer les retours à la ligne \n par un string vide
    s = f.readline()
f.close()
print("")
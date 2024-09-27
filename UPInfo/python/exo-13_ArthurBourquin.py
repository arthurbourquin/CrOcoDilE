"""
Calcule du volume d'un cone de rayon et hauteur donnés par l'utilisateur

"""

from math import pi


print("Calcul du volume d'un cone.")
r = input("Rayon du cone : ")
r = float(r)
h = input("Hauteur du cone : ")
h = float(h)
v = (1 / 3) * pi * r * r * h
print(f"Volume du cone: {v:.2f}\n")
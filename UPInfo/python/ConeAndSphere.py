# WIP

from math import pi

def menu():
    print("\n1 Volume a Cone    2 Surface and Volume of a Sphere    3 Quit")
    choice = input("> ")
    choice = int(choice)
    return choice

def cone_vol():
    r = input("Cone Radius: ")
    r = float(r)
    h = input("Cone Height: ")
    h = float(h)
    v = (1 / 3) * pi * r * r * h
    print(f"Cone Volume: {v:.2f}\n")

def sphere_surf_vol():
    r = input("Sphere Radius: ")
    r = float(r)
    v = (4 / 3) * pi * r ** 3
    print(f"Sphere Volume: {v:.2f}")

# main program
while True:
    choice = menu()
    if choice == 1:
        cone_vol()
    elif choice == 2:
        sphere_surf_vol()
    elif choice == 3:
        print("\nBye-bye\n")
        break
    else:
        print("\n??? what ???\n")
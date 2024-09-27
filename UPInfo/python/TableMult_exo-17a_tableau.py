# WIP
print("Enter the 2 numbers to define table dimensions:\n")
a = int(input("first number"))
b = int(input("second number"))


for a in range(1, a + 1, 1):
    print("")
    print(f"table de {a}")
    for b in range(1, b + 1, 1):
        r = a * b
        print(f"{a:2d} * {b:2d} = {r:3d}")
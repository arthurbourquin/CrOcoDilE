"""
Calculateur de e

"""

# functions

def fac(k):
    f = 1
    for i in range(1, k + 1):
        f = f * i
    return f

def e(n):
    e = 0
    for i in range(0, n + 1):
        e = e + 1 / fac(i)
    return e
    
# program
order = int(input("Calculer e avec la méthode de la série entière\nPrécision de : "))
result = e(order)
print(f"e = {result:.10f}")

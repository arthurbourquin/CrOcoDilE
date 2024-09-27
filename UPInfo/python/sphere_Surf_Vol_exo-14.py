from math import pi

def surface_volume_sphere(r):
    """ calculate the surface and the volume of a given sphere """
    S = 4 * pi * r * r
    V = S * r / 3
    return S, V

# main program

# ask the radius
r = input("What is the sphere radius?\nRadius: ")
r = float(r)

# calculate the surface and the volume of the sphere
S, V = surface_volume_sphere(r)

# display result
print(f'Surface: {S:.2f}\nVolume: {V:.2f}')
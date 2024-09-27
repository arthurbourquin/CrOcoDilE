"""
Jeu, deviner un nombre entier entre 0 et 100

"""
# exo-19 UPInfo
# 2024 Aug 29
# Arthur Bourquin

from random import randint

# prog principal

# geerate rando mnumber
r = randint(0, 100)

nb_trials = 0
while True:
    x = input("Guess the number between 0 and 100: ")
    x = int(x)
    nb_trials = nb_trials + 1
    if x > r:
        print("It's smaller")
    elif x < r:
        print("It's bigger")
    else:
        print("YES!")
        print(f"You have guessed in {nb_trials} trials")
        break
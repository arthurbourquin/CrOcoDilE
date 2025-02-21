/*
Enoncé : Vous devez écrire une fonction qui
prend deux nombres réels en entrée et retourne
le plus grand des deux. La fonction doit
utiliser le passage par référence constante
pour éviter de copier les arguments et garantir
qu'ils ne seront pas modifiés.

Instructions :
- Créez une fonction max qui prend deux
paramètres en référence constante.
- La fonction doit comparer les deux nombres et
retourner le plus grand.
- Écrivez un programme principal qui appelle
cette fonction avec des exemples d'entrées.
*/

#include <iostream>

using namespace std;

double custom_max(const double& a, const double& b) {
    if(a < b) {
        return b;
    } else {
        return a;
    }
}

int main() {
    cout << "Première valeur : ";
    double a;
    cin >> a;
    cout << "Deuxième valeur : ";
    double b;
    cin >> b;
    cout << custom_max(a, b) << endl;
    return EXIT_SUCCESS;
}
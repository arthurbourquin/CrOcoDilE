#include <iostream>
#include <iomanip>
using namespace std;

template<typename T1, typename T2>
T2 sum_prod(T1 from, T1 to, T2 factor, T2 addor, char op) {
    int k = from;
    int n = to;
    T2 res = k * factor + addor;
    ++k;
    while(k <= n) {
        if(op == '+') res += k * factor + addor;
        if(op == '*')res *= k * factor + addor;
        k++;
    }
    return res;
}

template<typename T1, typename T2>
T2 sum(T1 from, T1 to, T2 factor, T2 addor) {
    return sum_prod(from, to, factor, addor, '+');
}

template<typename T1, typename T2>
T2 prod(T1 from, T1 to, T2 factor, T2 addor) {
    return sum_prod(from, to, factor, addor, '*');
}

int main() {

    /*
    Vous devez faire creuser un puits de 40 mètres de profondeur. Vous êtes en contact avec
    une personne qui est prête à exécuter le travail mais demande 100 francs pour le premier
    mètre, 120 pour le deuxième, 140 pour le troisième, etc.
    a) Combien coûte le dernier mètre ?
    b) Quel est le coût total d’exécution des travaux ?
    */
    cout << sum((1 - 1), (40 - 1), 20, 100) << endl;

    /*
    La HEIG-VD doit remplir une bouteille d'un litre avec 1,1 litre d'eau.
    Elle fait appel à un expert rémunéré 1'000 CHF/jour. Cet expert ne parvient pas à trouver de solution, si bien qu'un nouvel expert est engagé pour le lendemain (jour ouvré), rémunéré 15% plus que le premier.
    Chaque jour, un nouvel expert est ajouté au projet avec un salaire de 15% suppérieur au précédent.
    Quel sera le coût total pour la HEIG-VD au bout d'une année (240 jours ouvrés) ?
    */
    cout << 1000 * sum(1, 240, 1.15, 0.) << endl;



    return 0;
}
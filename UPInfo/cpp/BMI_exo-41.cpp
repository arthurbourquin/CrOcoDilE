#include <iostream>

using namespace std;

int main(void)
{
    // ask input
    cout << "J'ose vous demander votre poids ? ";
    double weight;
    cin >> weight;

    cout << "Et vortre taille ? ";
    double height;
    cin >> height;

    // verify input values
    if (weight <= 0 || height <= 0)
    {
        cerr << "Déso, j'ai pas compris vote poids ou votre taille...\n";
        return EXIT_FAILURE;
    }

    // calculate BMI
    double BMI = weight / (height * height);

    // classifiation et output
    if (BMI < 18.25)
    {
        cout << "Un peu maigre..." << endl;
    }
    else if (BMI < 25)
    {
        cout << "C'est bien." << endl;
    }
    else if (BMI < 30)
    {
        cout << "Un BMI de " << BMI << " ou plus est considéré comme être en surpoids." << endl;
    }
    else if (BMI < 50)
    {
        cout << "Un BMI de " << BMI << " ou plus est considéré comme être obèse." << endl;
    }
    else
    {
        cout << "Vous êtes encore vivant.e ?? (C'est Laurianne qui demande)" << endl;
    }

    return EXIT_SUCCESS;
}
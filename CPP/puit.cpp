#include <iostream>
#include <iomanip>
using namespace std;

int main() {

    int ouais = 0;

    for(int i = 1; i <= 40; ++i) {
        ouais += 100 + (i - 1) * 20;
        cout << fixed << setw(3) << i << " ème mètre = " << setw(6) << (i - 1) * 20 + 100 << "   ";
        cout << fixed << setw(3) << i << " mètres = " << setw(6) << ouais << endl;
    }

    cout << "Coût total = " << ouais << endl;

    return 0;
}
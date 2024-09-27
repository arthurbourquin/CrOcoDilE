#include <iostream>

using namespace std;

int Un(){
    int i = 4;
    while (i != 0) {
        cout << --i << " ";
    }
    cout << endl;
}

int Deux(){
    int j = 8;
    while (j > 0) {
        cout << j << " ";
        j /= 2;
    }
    cout << endl;
}

int Trois() {
    int a = 0;
    while (a < 10) {
        cout << a << " ";
        a++;
    }
}

int main() {
    Un();
    Deux();
    Trois();
}

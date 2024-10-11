#include <iostream>

using namespace std;

int main() {
    cout << "Switch. Enter case number (0, 3, 12, 99): ";
    int a;
    cin >> a;
    switch(a){
        case 0: cout << "Zero" << endl; break;
        case 3: cout << "Three" << endl; break;
        case 12: cout << "Twelve" << endl; break;
        case 99: cout << "Ninty nine" << endl; break;
        default: cout << "Default" << endl;
    }
    return EXIT_SUCCESS;
}
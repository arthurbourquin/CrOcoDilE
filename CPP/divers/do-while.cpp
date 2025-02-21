#include <iostream>

using namespace std;

int main() {
    cout << "Do while. Enter a positive integer: ";
    int a;
    cin >> a;
    int i = 0;
    do {
        cout << "i = " << i << endl;
        i++;
    } while(i < a);
    return EXIT_SUCCESS;
}
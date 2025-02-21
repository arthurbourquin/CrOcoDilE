#include <iostream>

using namespace std;

int main() {
    cout << "Loop for. Enter a positive integer: ";
    int a;
    cin >> a;
    for(int i = 0; i < a; i++){
        cout << "i = " << i << endl;
    }
    return EXIT_SUCCESS;
}
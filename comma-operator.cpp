#include <iostream>

using namespace std;

int main() {
    cout << "Comma operator." << endl;
    cout << "1. 'cout << (1, 2, 3, 4) << endl;' returns: " << (1, 2, 3, 4) << endl;
    cout << "Note: warning: expression result unused [-Wunused-value]" << endl;
}
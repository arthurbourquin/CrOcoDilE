#include <iostream>
using namespace std;

int main() {
    char a = 0;
    for(int i = 0; i < 1000; i++) {
        cout << a; a++;
    }
    return EXIT_SUCCESS;
}
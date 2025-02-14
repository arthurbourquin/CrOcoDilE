#include <iostream>
#include <random>
using namespace std;
random_device rd;
mt19937 gen(rd());
// use dist(gen); to generate a random value

int main() {

    while(true) {
        uniform_int_distribution<> aa(12, 19);
        int a = aa(gen);
        uniform_int_distribution<> bb(12, 19);
        int b = bb(gen);
        cout << a << " * " << b << " = ";
        int r;
        cin >> r;
        if(r == 0) break;
        if(r == a * b) {
        } else {
            cout << "non : " << a << " * " << b << " = " << a * b << endl;
        }
    }

    return 0;
}
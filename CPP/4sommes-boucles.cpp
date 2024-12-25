#include <iostream>
#include <cmath>
#include <random>
using namespace std;

random_device rd;
mt19937 gen(rd());
uniform_int_distribution<> dist(1, 10);

int f1(int x) {return 2 * x + 1;}

int sum(int k, int n, ) {
    if(k > n) return k;
    return sum(k + 1, n);
}


int sum(int k, int n) {
    if(k > n) return k;
    return sum(k + 1, n);
}



int main() {

    cout << sum() << endl;

    return 0;
}
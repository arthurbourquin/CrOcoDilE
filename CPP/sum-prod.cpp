#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

size_t k = 1;
size_t n = 5;
double r = 2;
double a() {
    return pow(2, k);
}

int main() {

    double term = 0;
    double current_term = 0;
    while(k <= n) {
        current_term = a();
        term += current_term;
        cout << fixed << setw(3) << k << " " << setw(10) << current_term << " " << setw(10) << term << endl;
        k++;
    }

    return 0;
}
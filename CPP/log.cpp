#include <iostream>
#include <cmath>
using namespace std;

double log_e(double x) {
    return log(x);
}

double log_10(double x) {
    return log(x) / log(10);
}

int main() {
    
    cout << log_e(10.0) << endl;
    cout << log_10(10.0) << endl;

    return 0;
}

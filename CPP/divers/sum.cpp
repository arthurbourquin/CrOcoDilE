#include <iostream>
#include <iomanip>
#include <vector>
#include <cmath>
using namespace std;

double m(double a, double b) {
    return a / b - ((long long)a / (long long)b);
}

string format(double val) {
    string s = to_string(val);
    return s;
}

int main() {

    double result = 0;
    for(int k = 1; k <= 10; ++k) {
        for(int l = 1; l <= 10; ++l) {
            double current = m(k, l);
            cout << fixed << setprecision(14) << current << "\t";
            result += current;
        }
        cout << endl;
    }

    return 0;
}
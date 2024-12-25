#include <iostream>
#include <cmath>
#include <random>
using namespace std;

random_device rd;
mt19937 gen(rd());
uniform_int_distribution<> dist(1, 10);

int f1(int a) {
    return 2 * a + 1;
}

int f2(int a) {
    return a * a - 1;
}

int sum(string f) {
    int result = 0;
    int k = dist(gen);
    int n = k + dist(gen);
    for(int i = k; i <= n; ++i) {
        if          (f == "f1") {result += f1(result);}
        else if     (f == "f2") {result += f2(result);}
        else if     (f == "f1+f2") {result += f1(result) + f2(result);}
    }
    return result;
}

int main() {

    cout << sum("f1") << endl;
    cout << sum("f1") + sum("f2") << endl;
    cout << sum("f1+f2") << endl;

    return 0;
}
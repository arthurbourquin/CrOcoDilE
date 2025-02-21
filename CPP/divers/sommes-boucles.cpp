#include <iostream>
#include <random>
using namespace std;

random_device rd;
mt19937 gen(rd());
uniform_int_distribution<> dist(1, 10);

int A, B, C, D;

void randomize() {
    A = dist(gen);
    B = A + dist(gen);
    C = dist(gen);
    D = C + dist(gen);
}

void out(int a, int b, int c, int d) {
    for(int i = a; i < b; ++i) {
        for(int j = c; j < d; ++j) {
            cout << "-";            
        }
        cout << ".";
    }
    cout << endl;
}

int sum_sum(int a, int b, int c, int d) {
    int result = 0;
    for(int i = a; i < b; ++i) {
        for(int j = c; j < d; ++j) {
            result++;
        }
    }
    return result;
}

int sum_sum_product(int a, int b, int c, int d) {
    int result = 0;
    for(int i = a; i < b; ++i) {
        for(int j = c; j < d; ++j) {
            result += i * j;
        }
    }
    return result;
}

int sum_product_sum(int a, int b, int c, int d) {
    int result_a = 0;
    int result_b = 0;
    for(int i = a; i < b; ++i) {
        result_a++;
    }
    for(int j = c; j < d; ++j) {
        result_b++;
    }
    return result_a * result_b;
}

int main() {

    randomize();
    cout << sum_sum(A, B, C, D) << endl;
    cout << sum_sum_product(A, B, C, D) << endl;
    cout << sum_product_sum(A, B, C, D) << endl;

    return 0;
}
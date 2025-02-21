#include <iostream>
#include <random>
using namespace std;

random_device rd;
mt19937 gen(rd());
uniform_int_distribution<> dist(1, 10);

int A, B, C, D, E;

void randomize() {
    A = dist(gen);
    B = A + dist(gen);
    C = dist(gen);
    D = C + dist(gen);
    E = dist(gen);
    cout << A << " " << B << " " << C << " " << D << " " << E << endl << endl;
}

int sum_id(int from, int to) {
    int result = 0;
    for(int i = from; i <= to; ++i) {
        result = result + i;
    }
    return result;
}

int sum_con_prod_id(int from, int to, int constant) {
    int result = 0;
    for(int i = from; i <= to; ++i) {
        result = result + constant * i;
    }
    return result;
}

int main() {

    randomize();
    cout << sum_con_prod_id(A, B, E) << endl;
    cout << sum_id(A, B) * E<< endl;

    
 
    return 0;
}
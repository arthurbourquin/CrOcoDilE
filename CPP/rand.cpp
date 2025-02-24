#include <iostream>
#include <random>

using namespace std;

int main() {
    random_device rd;
    mt19937 g(rd());  
    int count = 0;
    int total = 0;
    int n = 30;
    uniform_int_distribution<int> dist(0, n);
    for(int i = 1; i < n; ++i) {
        while(dist(g) % i) {
            cout << "! ";
            ++count;
        }
        cout << count << endl;
        total += count;
        count = 0;
    }
    cout << total / n << endl;
    return 0;
}

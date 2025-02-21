#include <iostream>

using namespace std;

int main() {
    cout << "For each. Enter a string: ";
    string s;
    cin >> s;
    for (const int& s : s) {
        std::cout << s << " ";
    }
    cout << endl;
    return 0;
}
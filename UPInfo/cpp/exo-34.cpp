#include <iostream>
#include <cmath>

using namespace std;

int main(void)
{
    cout << "Ainter an positive integer" << endl;
    int a;
    cin >> a;

    cout << "Aintair an integer, different from a" <<endl;
    int b;
    cin >> b;

    cout << "a = " << a << endl;
    cout << "b = " << b << endl;

    cout << "a + b = " << a + b << endl;
    cout << "a - b = " << a - b << endl;
    cout << "a * b = " << a * b << endl;
    cout << "a / b = " << a / b << endl;
    cout << "a % b = " << a % b << endl;
    cout << "log10(a) = " << log10(a) << endl;
    cout << "log(a) = " << log(a) << endl;
    cout << "a^b (pow(a, b)) = " << pow(a, b) << endl;

    return EXIT_SUCCESS;
}
#include <iostream>

using namespace std;

void mult_table(int n)
{
        cout << "Table de " << n << " :" << endl;
        for (int i = 1; i <= 10; i++)
        {
            cout << n << " * " << i << " = " << n * i << endl;
        }
        cout << endl;    
}


int main(void)
{
    for (int i = 1; i <= 10; i++)
    {
        mult_table(i);
    }

    return EXIT_SUCCESS;
}
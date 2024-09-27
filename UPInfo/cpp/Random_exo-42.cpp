#include <iostream>
#include <cstdlib>
using namespace std;
int main()
{
    srand(time(NULL));

    int rval = rand();
    rval = (rval % 100) + 1;
    cout << "Valeur secrète... " << rval << endl;

    cout << "Devinez " << endl;
    int gval;
    cin >> gval;

    while (true)
    {
        if (rval > gval)
        {
            cout << "Plus grand" << endl;
        }
        else if (rval < gval)
        {
            cout << "Plus petit" << endl;
        }
        else
        {
            cout << "Yes !" << endl;
            break;
        }

        cin >> gval;
    }
    return EXIT_SUCCESS;
}

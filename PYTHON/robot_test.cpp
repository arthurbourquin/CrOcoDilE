/* --------------------------- 
Laboratoire : 02
Auteur(s) : Arthur Bourquin
Date : 23 septembre 2024
But : Calcul du temps de trajet 
Remarque(s) : 
--------------------------- */

#include <iostream>
#include <cmath>

using namespace std;

double s1 = 5; // speed on road (km/h)
double s2 = 2; // speed on the terrain (km/h)
double dx = 3; // objective distance to road (km)
double dy = 10; // distance to nearest point to the objective on the road (km)

int main() {

    cout << "Enter the distance in meter(s) the robot will travel on the road before leaving it:" << endl;
    double L1 = 0;
    cin >> L1;

    double L2 = pow(pow((dy - L1), 2) + pow(dx, 2), 0.5);
    double t1 = L1 / s1;
    double t2 = L2 / s2;
    double t = t1 + t2;

    cout << "Duration: " << t << " hours" << endl;
    return EXIT_SUCCESS;

}

// commit
// push
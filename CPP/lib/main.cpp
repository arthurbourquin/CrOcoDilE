#include <iostream>

#include "chrono_arthur.h"
#include "generate_vector.h"
#include "print_vector.h"
#include "generate_csv.h"
#include "transpose.h"

using namespace std;

int main() {

    chrono_arthur(true, "début de génération du vecteur");
    vector<int> v = generate_vector<int>(10, false);
    chrono_arthur(false, "fin de génération du vecteur");

    print_vector(v);

    vector<vector<int>> table;
    for(int i = 0; i < 5; ++i) {
        vector<int> tmp = generate_vector<int>(10, false);
        table.push_back(tmp);
    }

    print_vector(table);

    vector<vector<int>> tableT = transpose(table);

    chrono_arthur(true, "début de génération du cvs");
    generate_csv("table.csv", v);
    chrono_arthur(false, "fin de génération du cvs");

    print_vector(v);

    return 0;

}

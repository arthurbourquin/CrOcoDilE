#include <iostream>

#include "chrono_arthur_all.h"
#include "generate_vector.h"
#include "print_vector.h"
#include "generate_csv.h"
#include "transpose.h"

using namespace std;

int main() {

    cout << chrono_arthur(true, "generate table") << endl;
    vector<vector<int>> table;
    for(int i = 0; i < 3; ++i) {
        vector<int> tmp = generate_vector<int>(5, false);
        table.push_back(tmp);
    }
    cout << chrono_arthur(false, "generate table") << endl;

    print_table(table);
    cout << endl;

    cout << chrono_arthur(true, "transpose table") << endl;
    vector<vector<int>> tableT = transpose(table);
    cout << chrono_arthur(false, "transpose table") << endl;
    
    print_table(tableT);
    cout << endl;

    cout << chrono_arthur(true, "generate csv") << endl;
    generate_csv("table.csv", table);
    cout << chrono_arthur(false, "generate csv") << endl;

    return 0;

}

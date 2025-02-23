#include <iostream>
using namespace std;

#include "chrono_arthur.h"
#include "generate_vector.h"
#include "print_vector.h"
#include "generate_csv.h"
#include "transpose.h"

int main() {
    
    vector<vector<int>> table;
    for(int i = 0; i < 3; ++i) {
        vector<int> tmp = generate_vector<int>(5, false);
        table.push_back(tmp);
    }

    print_table(table);
    cout << endl;

    vector<vector<int>> tableT = transpose(table);
    
    print_table(table);
    cout << endl;
    
    
    return 0;
}
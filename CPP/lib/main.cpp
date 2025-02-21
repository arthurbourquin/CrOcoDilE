#include "arthur-lib.h"

vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9};
vector<vector<int>> table = {
    {1, 2, 3, 5, 6, 6},
    {},
    {10, 20, 30},
    {100, 200, 300},
    {1000, 2000, 3000}
};

int main() {

    vector<int> v1 = generate_vector<int>(10, true);
    print_vector(v1, "\t");
    vector<int> v2 = generate_vector<int>(10, false);
    print_vector(v2, "\t");

    print_table(table);
    auto trans = transpose(table);
    print_table(trans);

    return 0;
}

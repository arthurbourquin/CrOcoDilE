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

    generate_csv("vector.csv", v);
    generate_csv("table.csv", table);

    return 0;
}

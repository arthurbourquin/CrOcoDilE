#ifndef _ARTHURLIB_
#define _ARTHURLIB_

#include <iostream>
#include <string>
#include <vector>
#include <array>
#include <cmath>
#include <algorithm>
#include <string_view>
using namespace std;

string to_string(double val, size_t size) {
    string result = "";
    for(int i = 0; i < size; ++i) {
        result += to_string((long long)(val * pow(10, i + 1)) - (long long)(val * pow(10, i)) * 10);
    }
    return result;
}

template<typename Table>
void print(const Table & table, string separator = ", ", bool endl = true) {
    for(size_t i = 0; i < table.size(); ++i) {
        cout << table.at(i);
        if(i != table.size() - 1) cout << separator;
    }
    cout << "\n";
}

template<typename It>
void tri_a_bulles(It first, It last) {
    for(size_t i = 0; i < distance(first, last); ++i) {
        It current = first;
        for(; current != last; ++current) {
            if(*current > *next(current)) swap(*current, *next(current));
        }
    }
}

template<typename Table>
void tri_a_bulles(Table & table) {
    tri_a_bulles(& table.at(0), & table.at(table.size() - 1));
}

#endif  
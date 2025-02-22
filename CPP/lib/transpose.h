#ifndef _TRANSPOSE_
#define _TRANSPOSE_

#include <vector>
#include <array>

using namespace std;

template<typename T>
vector<vector<T>> transpose(vector<vector<T>> table) {
    size_t rows = table.size();
    size_t columns = 0;
    for(vector<T> e : table) {
        e.size() > columns ? columns = e.size() : columns = columns;
    }
    vector<vector<T>> result(columns, vector<T>(rows, 0));
    for(size_t i = 0; i < rows; ++i) {
        for(size_t j = 0; j < table.at(i).size(); ++j) {
            result.at(j).at(i) = table.at(i).at(j);
        }
    }
    return result;
}

template<typename T, size_t rows, size_t columns>
array<array<T, rows>, columns> transpose(const array<array<T, columns>, rows> & table) {
    size_t orig_rows = table.size();
    size_t orig_columns = table.at(0).size();
    array<array<T, orig_rows>, orig_columns> result;
    for(size_t i = 0; i < orig_rows; ++i) {
        for(size_t j = 0; j < orig_columns; ++j) {
            result.at(j).at(i) = table.at(i).at(j);
        }
    }
    return result;
}

#endif

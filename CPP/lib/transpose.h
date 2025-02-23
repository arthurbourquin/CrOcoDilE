#ifndef _TRANSPOSE_
#define _TRANSPOSE_

#include <vector>

using namespace std;

template<typename T>
vector<vector<T>> transpose(const vector<vector<T>> & table) {
    size_t input_rows = table.size();
    size_t input_columns = 0;
    for(const vector<T> & e : table) {
        if(e.size() > input_columns) {
            input_columns = e.size();
        }
    }
    vector<vector<T>> result(input_columns, vector<T>(input_rows));
    for(size_t i = 0; i < input_rows; ++i) {
        for(size_t j = 0; j < input_columns; ++j) {
            result[j][i] = table[i][j];
        }    
    }
    return result;
}

#endif

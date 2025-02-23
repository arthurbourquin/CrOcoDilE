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
    vector<vector<T>> result;
    for(size_t i = 0; i < input_columns; ++i) {
        vector<T> tmp;
        for(size_t j = 0; j < input_rows; ++j) {
            if(table.at(j).at(i)) {
                tmp.push_back(table.at(j).at(i));
            }
        }
        result.push_back(tmp);
    }
    return result;
}

#endif

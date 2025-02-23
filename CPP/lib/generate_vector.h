#ifndef _GENERATE_VECTOR_
#define _GENERATE_VECTOR_

#include <vector>
#include <random>
#include <algorithm>

using namespace std;

template<typename T>
vector<T> generate_vector(size_t size, bool sorted = false) {
    vector<T> result;
    T current = 0;
    for(size_t i = 0; i < size; ++i) {
        result.push_back(current);
        ++current;
    }
    if(!sorted) {
        random_device rd;
        mt19937 g(rd());
        shuffle(result.begin(), result.end(), g);
    }
    return result;
}

#endif

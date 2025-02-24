#include "generate_vector.h"

using namespace std;

template<typename T>
vector<T> generate_vector(size_t size, bool sorted) {
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

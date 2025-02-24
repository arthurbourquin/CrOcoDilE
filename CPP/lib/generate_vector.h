#ifndef GENERATE_VECTOR_
#define GENERATE_VECTOR_

#include <vector>
#include <random>
#include <algorithm>

using namespace std;

template<typename T>
vector<T> generate_vector(size_t size, bool sorted = false);

#endif

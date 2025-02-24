#ifndef PRINT_VECTOR_
#define PRINT_VECTOR_

#include <string>
#include <vector>
#include <array>
#include <iostream>

using namespace std;

template<typename It>
void print_vector(It first, It last, string separator = "\t");

template<typename T>
void print_vector(const vector<T> & v, string separator = "\t");

template<typename T>
void print_table(const vector<vector<T>> & table);

#endif

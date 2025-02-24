#ifndef GENERATE_CSV_
#define GENERATE_CSV_

#include <vector>
#include <string>
#include <fstream>
#include <iostream>

using namespace std;

template<typename T>
void generate_csv(const string & filename, const vector<vector<T>> & table);

template<typename T>
void generate_csv(const string & filename, const vector<T> & v);

#endif

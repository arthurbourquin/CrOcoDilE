#include "print_vector.h"

using namespace std;

template<typename It>
void print_vector(It first, It last, string separator) {
    if(first == last) return;
    for(; first != prev(last); ++first) {
        cout << *first << separator;
    }
    cout << *prev(last) << endl;
}

template<typename T>
void print_vector(const vector<T> & v, string separator) {
    print_vector(v.begin(), v.end(), separator);
}

template<typename T>
void print_table(const vector<vector<T>> & table) {
    for(const vector<T> & e : table) {
        print_vector(e);
    }
}

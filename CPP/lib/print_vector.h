#ifndef _PRINT_VECTOR_
#define _PRINT_VECTOR_

#include <string>
#include <vector>
#include <array>

using namespace std;

template<typename It>
void print_vector(It first, It last, string separator = "\t") {
    if(first == last) return;
    for(; first != prev(last); ++first) {
        cout << *first << separator;
    }
    cout << *prev(last) << endl;
}

template<typename T>
void print_vector(const vector<T> & v, string separator = "\t") {
    print_vector(v.begin(), v.end(), separator);
}

template<typename T>
void print_table(const vector<vector<T>> & table) {
    for(vector<T> e : table) {
        print_vector(e);
    }
}

template<typename It>
bool bubble_sort(It first, It last) { 
    if(first == last) return false;
    bool swapped = false;
    It current = first;
    while(last != first) {
        while(current != prev(last)) {
            if(*current > *next(current)) {
                swap(*current, *next(current));
                swapped = true;
            }
            ++current;
        }
        if(swapped == false) break;
        current = first;
        --last;
    }
    return swapped;
}

#endif

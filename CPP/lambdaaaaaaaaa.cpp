#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

template<typename T>
void increment_vector_elements(vector<T> & vicky) {
    for(T & e : vicky) {
        e++;
    }
}

template<typename T>
void cout_vector(const vector<T> & vicky) {
    cout << "[";
    for(T e : vicky) {
        cout << e << ", ";
    }
    cout << "]" << endl;
}



int main() {

    vector<int> v = {1, 2, 3, 4, 5};

    cout_vector(v);
    increment_vector_elements(v);
    cout_vector(v);

    int e = 7;

    for_each(v.begin(), v.end(), ()[int a, int b]{return a == b;});

    return 0;
}
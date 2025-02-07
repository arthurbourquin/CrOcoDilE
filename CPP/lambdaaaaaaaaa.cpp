#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

template<typename T>
void cout_vector(const vector<T> & vicky) {
    for(T e : vicky) {cout << e << " ";}
    cout << endl;
}

template<typename T>
void cout_vector(const vector<vector<T>> & vicky) {
    for(vector<T> e : vicky) {cout_vector(e);}
    cout << endl;
}


int main() {

    vector<double> v1 = {1, 3, 2, 3, 1};
    vector<double> v2 = {3, 2, 3, 1, 3};
    vector<double> v3(5, 0);

    cout_vector(vector<vector<double>>{v1, v2, v3});

    // unary
    // parameter function doesn't return anything
    for_each(v1.begin(), v1.end(), [](double & x) {x < 2 ? x = 0 : x = 4;});

    cout_vector(vector<vector<double>>{v1, v2, v3});

    // binary
    // parameter function must return something
    transform(v1.begin(), v1.end(), v2.begin(), v3.begin(), [](double a, double b){return max(a, b);});

    cout_vector(vector<vector<double>>{v1, v2, v3});

    // unary
    //
    transform(v1.begin(), v1.end(), v3.begin(), [](){});

    return 0;
}
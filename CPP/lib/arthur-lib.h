#ifndef _ARTHUR_LIB_
#define _ARTHUR_LIB_

#include <iostream>
#include <vector>
#include <span>
#include <string>
#include <algorithm>
#include <random>
#include <fstream>
#include <chrono>
#include <ctime>
using namespace std;

string to_string(double val, size_t size) {
    string result = "";
    for(int i = 0; i < size; ++i) {
        result += to_string((long long)(val * pow(10, i + 1)) - (long long)(val * pow(10, i)) * 10);
    }
    return result;
}

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

template<typename T>
bool bubble_sort(vector<T> & v) {
    return bubble_sort(v.begin(), v.end());
}

template<typename It>
bool selection_sort(It first, It last) {
    if(first == last) return false;
    bool swapped = false;
    for(; first != prev(last); ++first) {
        It current = next(first);
        It min = current;
        for(; current != last; ++current) {
            if(*current < *min) {
                min = current;
            }
        }
        if(*min < *first) {
            swap(*min, *first);
            swapped = true;
        }
    }
    return swapped;
}

template<typename T>
bool selection_sort(vector<T> & v) {
    return selection_sort(v.begin(), v.end());
}

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

template<typename T>
void generate_csv(const string & filename, const vector<T> & vector) {

    ofstream outputfile(filename);

    if(not outputfile.is_open()) {
        cerr << "Pas pu ouvrir le fichier en écriture" << endl;
        return;
    }

    for(size_t i = 0; i < vector.size() - 1; ++i) {
        outputfile << vector.at(i) << ",";
    }
    outputfile << vector.back();

    outputfile.close();
}

template<typename T>
void generate_csv(const string & filename, const vector<vector<T>> & table) {

    ofstream outputfile(filename);

    if(not outputfile.is_open()) {
        cerr << "Pas pu ouvrir le fichier en écriture" << endl;
        return;
    }

    for(size_t i = 0; i < table.size(); ++i) {
        if (table.at(i).empty()) {
            outputfile << "\n";
            continue;
        }
        for(size_t j = 0; j < table.at(i).size() - 1; ++j) {
            outputfile << table.at(i).at(j) << ",";
        }
        outputfile << table.at(i).back();
        outputfile << "\n";
    }

    outputfile.close();
}

template<typename T>
vector<vector<T>> transpose(vector<vector<T>> table) {
    size_t rows = table.size();
    size_t columns = 0;
    for(vector<T> e : table) {
        e.size() > columns ? columns = e.size() : columns = columns;
    }
    vector<vector<T>> result(columns, vector<T>(rows, 0));
    for(size_t i = 0; i < rows; ++i) {
        for(size_t j = 0; j < table.at(i).size(); ++j) {
            result.at(j).at(i) = table.at(i).at(j);
        }
    }
    return result;
}

double chrono_arthur(bool start) {
    static chrono::time_point<chrono::system_clock> start_time;
    if(start) {
        start_time = chrono::system_clock::now();    
        return 0;
    } else {
        chrono::time_point<chrono::system_clock> stop_time;
        stop_time = chrono::system_clock::now();
        chrono::duration<double> duration = stop_time - start_time;
        return duration.count();    
    }
}

#endif

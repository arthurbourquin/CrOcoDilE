#ifndef _SORTING_
#define _SORTING_

#include <vector>

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

#endif

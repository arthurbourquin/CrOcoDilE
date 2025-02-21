#include "lib/arthurlib.cpp"
using namespace std;

template <typename T>
struct Entre {
    const T min;
    const T max;

    bool operator()(const T & valeur) const {
        return (valeur >= min) && (valeur <= max);
    }
};

template <typename T>
Entre<T> make_entre(const T & min, const T & max) {
    return {min, max};
}

int main() {
    vector<int> v1 {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    vector<double> v2 {1., 2., 3., 4., 5., 6., 7., 8., 9., 10.};

    int min = 2, max = 7;

    cout << count_if(v1.begin(), v1.end(), make_entre(min, max)) << endl;
    cout << count_if(v2.begin(), v2.end(), make_entre(min, max)) << endl;

    return 0;
}

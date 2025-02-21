#include <iostream>

using namespace std;

int main(){
    cout << "While. Enter positive integer: ";
    int a;
    cin >> a;
    int i = 0;
    while(true){
        cout << "i = " << i << endl;
        i++;
        if(i == a) {
            break;
        }
    }
    return EXIT_SUCCESS;
}
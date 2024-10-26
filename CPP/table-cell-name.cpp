#include <iostream>
using namespace std;

int main() {
    cout << "Enter column number: "; int col; cin >> col;
    cout << "Enter row number: "; int row; cin >> row;
    int i = 0;
    while(i < col * row) {
        char theColumn = i % col + 'A';
        int theRow = i / row;
        cout << theColumn << theRow << " ";
        if(i % col == col - 1) {cout << endl;}
        i++;
    }
    
    return EXIT_SUCCESS;
}

/*
Enter column number: 7
Enter row number: 3
A0 B0 C0 D1 E1 F1 G2 
A2 B2 C3 D3 E3 F4 G4 
A4 B5 C5 D5 E6 F6 G6 
*/
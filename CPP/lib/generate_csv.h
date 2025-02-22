#ifndef _GENERATE_CSV_
#define _GENERATE_CSV_

/*
................................................................
La fonction est définie dans ce .h car si elle est définie dans
un .cpp il faudrait apparemment instancier une fonction par
type... j'ai pas tout compris et je sais pas ce qu'il faudrait
faire... peut-être instancier une fonction pour un int et une
fonction pour la class qu'on va créer
*/

#include <vector>
#include <string>
#include <fstream>
#include <iostream>

using namespace std;

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
void generate_csv(const string & filename, const vector<T> & v) {
    vector<vector<T>> table;
    table.push_back(v);
    generate_csv(filename, table);
}

#endif

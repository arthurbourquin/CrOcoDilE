#include "generate_csv.h"

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

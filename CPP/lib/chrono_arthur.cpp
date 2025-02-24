#include "chrono_arthur.h"

using namespace std;

/**
 * @brief Mesure le temps écoulé entre deux appels successifs.
 * @param start Indique s'il s'agit du début (`true`) ou de la fin (`false`) du chronométrage.
 * @param message (optionnel) Message à afficher avant ou après la mesure du temps.
 * @return La durée écoulée en secondes depuis le dernier appel avec `start = true`, 
 *         ou 0 si l'appel était avec `start = true`.
 */
double chrono_arthur(bool start, const string & message) {
    double result = 0;
    static chrono::time_point<chrono::system_clock> start_time;
    if(start) {
        start_time = chrono::system_clock::now();
        if(!message.empty()) cout << message << endl;
    } else {
        chrono::time_point<chrono::system_clock> stop_time;
        stop_time = chrono::system_clock::now();
        chrono::duration<double> duration = stop_time - start_time;
        result = duration.count();    
        if(!message.empty()) cout << message << " Duration: " << result << endl;
    }
    return result;
}

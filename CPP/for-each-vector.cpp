#include <iostream>
#include <vector>

int main() {
    std::vector<int> nombres = {1, 2, 3, 4, 5};

    // Utilisation de la boucle for each
    for (const auto& nombre : nombres) {
        std::cout << nombre << " ";
    }
    
    std::cout << std::endl;
    return 0;
}

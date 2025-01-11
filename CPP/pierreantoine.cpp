
// Définition des pins de connexion entre l’Attiny24A et le SN74HC595N
#define DATA 0 // PA0 sur l’Attiny (connecté à DS du registre)
#define SRCLK 1 // PA1 sur l’Attiny (connecté à SHCP du registre)
#define RCLK 2 // PA2 sur l’Attiny (connecté à STCP du registre)

// Numéros des LEDs rouges
const int ledPins[] = {3, 4, 5, 6, 7, 8, 9, 10}; // PA3 à PB0

int attente = 50;

void setup() {
// Configuration des pins comme sorties
pinMode(DATA, OUTPUT); // Pin pour transmettre les données au registre (DATA)
pinMode(SRCLK, OUTPUT); // Pin pour générer les impulsions d’horloge (SRCLK)
pinMode(RCLK, OUTPUT); // Pin pour verrouiller les données (RCLK)

// Configurer les pins des LEDs rouges
for(int pin : ledPins){
pinMode(pin, OUTPUT);
}
}

void loop() {
// Allumer les LEDs rouges une par une
for(int pin : ledPins){
digitalWrite(pin, HIGH);
delay(attente);
digitalWrite(pin, LOW);
}

// Allumer les LEDs du premier registre une par une
for(byte i = 0; i < 8; i++){
digitalWrite(RCLK, LOW); // Préparer le registre pour recevoir des données
shiftOut(DATA, SRCLK, MSBFIRST, 0b00000000); // LEDs du deuxième registre éteintes
shiftOut(DATA, SRCLK, MSBFIRST, 1 << i); // LED correspondante du premier registre
digitalWrite(RCLK, HIGH); // Verrouiller les données
delay(attente); // Pause de 50 ms
}

// Allumer les LEDs du deuxième registre une par une
for(byte i = 0; i < 8; i++){
digitalWrite(RCLK, LOW); // Préparer le registre pour recevoir des données
shiftOut(DATA, SRCLK, MSBFIRST, 1 << i); // LED correspondante du deuxième registre
shiftOut(DATA, SRCLK, MSBFIRST, 0b00000000); // LEDs du premier registre éteintes
digitalWrite(RCLK, HIGH); // Verrouiller les données
delay(attente); // Pause de 50 ms
}
// Éteindre toutes les LEDs des deux registres
digitalWrite(RCLK, LOW);
shiftOut(DATA, SRCLK, MSBFIRST, 0b00000000); // Éteindre toutes les LEDs du deuxième registre
shiftOut(DATA, SRCLK, MSBFIRST, 0b00000000); // Éteindre toutes les LEDs du premier registre
digitalWrite(RCLK, HIGH);
}

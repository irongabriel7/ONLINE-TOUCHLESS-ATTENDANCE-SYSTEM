//Libraries
#include <SPI.h>//https://www.arduino.cc/en/reference/SPI
#include <MFRC522.h>//https://github.com/miguelbalboa/rfid
//Constants
#define SS_PIN 5
#define RST_PIN 0
#include <WiFi.h>
#include <Wire.h>
// Replace with your SSID and Password
const char* ssid     = "GBX3";
const char* password = "password";

// Replace with your unique IFTTT URL resource
//const char* resource = "/trigger/______/_____/___/__________________________";

// How your resource variable should look like, but with your own API KEY (that API KEY below is just an example):
//const char* resource = "/trigger/bme280_readings/with/key/nAZjOphL3d-ZO4N3k64-1A7gTlNSrxMJdmqy3";

// Maker Webhooks IFTTT
const char* server = "maker.ifttt.com";

//Parameters
const int ipaddress[4] = {103, 97, 67, 25};

//Variables
byte nuidPICC[4] = {0, 0, 0, 0};
MFRC522::MIFARE_Key key;
MFRC522 rfid = MFRC522(SS_PIN, RST_PIN);

void setup() {
  pinMode(4,OUTPUT);
  pinMode(2,OUTPUT);
  //Init Serial USB
  Serial.begin(115200);
  Serial.println(F("Initialize System"));
  initWifi();
  //init rfid D8,D5,D6,D7
  SPI.begin();
  rfid.PCD_Init();

  Serial.print(F("Reader :"));
  rfid.PCD_DumpVersionToSerial();
  
}

void loop() {
  String rfid_final=readRFID();
  if(rfid_final!="Null")
  {
    Serial.println(rfid_final);
    makeIFTTTRequest(rfid_final);
  }
  
}

String readRFID(void ) { /* function readRFID */
  ////Read RFID card

  for (byte i = 0; i < 6; i++) {
    key.keyByte[i] = 0xFF;
  }
  // Look for new 1 cards
  if ( ! rfid.PICC_IsNewCardPresent())
    return "Null";

  // Verify if the NUID has been readed
  if (  !rfid.PICC_ReadCardSerial())
    return "Null";

  // Store NUID into nuidPICC array
  for (byte i = 0; i < 4; i++) {
    nuidPICC[i] = rfid.uid.uidByte[i];
  }

  Serial.print(F("RFID In dec: "));
  String stk = printDec(rfid.uid.uidByte, rfid.uid.size);
  // Halt PICC
  rfid.PICC_HaltA();

  // Stop encryption on PCD
  rfid.PCD_StopCrypto1();
  return stk;

}
//int null1[20];

String printDec(byte *buffer, byte bufferSize) {
  String sk="";
  for (byte i = 0; i < bufferSize; i++) {
    sk = sk + buffer[i];  
    
  }
  return sk;
 }

 void initWifi() {
  Serial.print("Connecting to: "); 
  Serial.print(ssid);
  WiFi.begin(ssid, password);  

  int timeout = 10 * 4; // 10 seconds
  while(WiFi.status() != WL_CONNECTED  && (timeout-- > 0)) {
    delay(250);
    Serial.print(".");
  }
  Serial.println("");

  if(WiFi.status() != WL_CONNECTED) {
     Serial.println("Failed to connect, going back to sleep");
     for(int j=0;j<5;j++)
     {
      digitalWrite(2,HIGH);
      delay(1000);
      digitalWrite(2,LOW);
      delay(500);
      }
  }

  else
  {
    for(int j=0;j<3;j++)
    {
      digitalWrite(4,HIGH);
      delay(1000);
      digitalWrite(4,LOW);
      delay(500);
    }
  }
  Serial.print("WiFi connected in: "); 
  Serial.print(millis());
  Serial.print(", IP address: "); 
  Serial.println(WiFi.localIP());
}

void makeIFTTTRequest(String rfid_final) {
  Serial.print("Connecting to "); 
  Serial.print(server);
  
  WiFiClient client;
  int retries = 5;
  while(!!!client.connect(server, 80) && (retries-- > 0)) {
    Serial.print(".");
  }
  Serial.println();
  if(!!!client.connected()) {
    Serial.println("Failed to connect...");
  }
  
  Serial.print("Request resource: "); 
  Serial.println(resource);

  // Data Sending
  String jsonObject = String("{\"value1\":\"") + rfid_final + "\",\"value2\":\"" + "\",\"value3\":\"" + "\"}";;
  //                      
  client.println(String("POST ") + resource + " HTTP/1.1");
  client.println(String("Host: ") + server); 
  client.println("Connection: close\r\nContent-Type: application/json");
  client.print("Content-Length: ");
  client.println(jsonObject.length());
  client.println();
  client.println(jsonObject);
        
  int timeout = 5 * 10; // 5 seconds             
  while(!!!client.available() && (timeout-- > 0)){

    for(int j=0;j<=10;j++)
    {
    digitalWrite(4,HIGH);
    delay(100);
    digitalWrite(4,LOW);
    delay(100);
    }
  }
  if(!!!client.available()) {
    Serial.println("No response...");
    for(int j=0;j<=10;j++)
    {
    digitalWrite(2,HIGH);
    delay(100);
    digitalWrite(2,LOW);
    delay(100);
    }
  }
  while(client.available()){
    Serial.write(client.read());
  }
  
  Serial.println("\nclosing connection");
  client.stop(); 
}

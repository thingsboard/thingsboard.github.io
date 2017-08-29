#include <PubSubClient.h>

#include <LWiFi.h>
#include <LWiFiClient.h>
#include <LGPS.h>
#include <LBattery.h>

#define WIFI_AP "YOUR_WIFI_AP"
#define WIFI_PASSWORD "YOUR_WIFI_PASSWORD"
#define WIFI_AUTH LWIFI_WPA  // choose from LWIFI_OPEN, LWIFI_WPA, or LWIFI_WEP.

#define TOKEN "YOUR_ACCESS_TOKEN"

gpsSentenceInfoStruct gpsInfo;

char thingsboardServer[] = "YOUR_THINGSBOARD_HOST_OR_IP";

LWiFiClient wifiClient;

PubSubClient client( wifiClient );

unsigned long lastSend;

void setup()
{
  Serial.begin(115200);
  LGPS.powerOn();
  Serial.println("GPS started.");
  InitLWiFi();
  client.setServer( thingsboardServer, 1883 );
  lastSend = 0;
}

void loop()
{
  LWifiStatus ws = LWiFi.status();
  boolean status = wifi_status(ws);
  if (!status) {
    Serial.println("Connecting to AP ...");
    while (0 == LWiFi.connect(WIFI_AP, LWiFiLoginInfo(WIFI_AUTH, WIFI_PASSWORD)))
    {
      delay(500);
    }
    Serial.println("Connected to AP");
  }

  if ( !client.connected() ) {
    reconnect();
  }

  if ( millis() - lastSend > 1000 ) { // Update and send only after 1 seconds
    getAndSendGPSData();
    lastSend = millis();
  }

  client.loop();

}

void getAndSendGPSData()
{
  Serial.println("Collecting GPS data.");
  LGPS.getData(&gpsInfo);
  Serial.println((char*)gpsInfo.GPGGA);

  char latitude[20];
  char lat_direction[1];
  char longitude[20];
  char lon_direction[1];
  char buf[20];
  char time[30];

  const char* p = (char*)gpsInfo.GPGGA;

  p = nextToken(p, 0); // GGA
  p = nextToken(p, time); // Time
  p = nextToken(p, latitude); // Latitude
  p = nextToken(p, lat_direction); // N or S?
  p = nextToken(p, longitude); // Longitude
  p = nextToken(p, lon_direction); // E or W?
  p = nextToken(p, buf); // fix quality

  const int coord_size = 8;
  char lat_fixed[coord_size], lon_fixed[coord_size];
  convertCoords(latitude, longitude, lat_direction, lon_direction, lat_fixed, lon_fixed, coord_size);

  Serial.print("Latitude:");
  Serial.println(lat_fixed);

  Serial.print("Longitude:");
  Serial.println(lon_fixed);

  if (buf[0] == '1')
  {
    // GPS fix
    p = nextToken(p, buf); // number of satellites
    Serial.print("GPS is fixed:");
    Serial.print(atoi(buf));
    Serial.println(" satellite(s) found!");
  }
  else
  {
    Serial.println("GPS is not fixed yet.");
  }

  // Obtain battery level
  String batteryLevel = String(LBattery.level());
  String batteryCharging = LBattery.isCharging() == 1 ? "true" : "false";

  // Just debug messages
  Serial.print( "Sending gps location and battery level: [" );
  Serial.print( lat_fixed ); Serial.print( lon_fixed );
  Serial.print(" Battery level: "); Serial.print( batteryLevel );
  Serial.print(" Battery charging: "); Serial.print( batteryCharging );
  Serial.print( "]   -> " );

  // Prepare a JSON payload string
  String payload = "{";
  payload += "\"latitude\":"; payload += lat_fixed; payload += ", ";
  payload += "\"longitude\":"; payload += lon_fixed; payload += ", ";
  payload += "\"batteryLevel\":"; payload += batteryLevel;  payload += ", ";
  payload += "\"batteryCharging\":"; payload += batteryCharging;
  payload += "}";

  // Send payload
  char attributes[100];
  payload.toCharArray( attributes, 100 );
  client.publish( "v1/devices/me/attributes", attributes );
  Serial.println( attributes );
}

void InitLWiFi()
{
  LWiFi.begin();
  // Keep retrying until connected to AP
  Serial.println("Connecting to AP ...");
  while (0 == LWiFi.connect(WIFI_AP, LWiFiLoginInfo(WIFI_AUTH, WIFI_PASSWORD))) {
    delay(500);
  }
  Serial.println("Connected to AP");
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Connecting to ThingsBoard node ...");
    // Attempt to connect (clientId, username, password)
    if ( client.connect("LinkIt One Device", TOKEN, NULL) ) {
      Serial.println( "[DONE]" );
    } else {
      Serial.print( "[FAILED] [ rc = " );
      Serial.print( client.state() );
      Serial.println( " : retrying in 5 seconds]" );
      // Wait 5 seconds before retrying
      delay( 5000 );
    }
  }
}

void convertCoords(const char* latitude, const char* longitude, const char* lat_direction,
                   const char* lon_direction, char* lat_return, char* lon_return, int buff_length)
{
  char lat_deg[3];

  // extract the first 2 chars to get the latitudinal degrees
  strncpy(lat_deg, latitude, 2);

  // null terminate
  lat_deg[2] = 0;

  char lon_deg[4];

  // extract first 3 chars to get the longitudinal degrees
  strncpy(lon_deg, longitude, 3);

  // null terminate
  lon_deg[3] = 0;

  // convert to integer from char array
  int lat_deg_int = arrayToInt(lat_deg);
  int lon_deg_int = arrayToInt(lon_deg);

  // must now take remainder/60
  // this is to convert from degrees-mins-secs to decimal degrees
  // so the coordinates are "google mappable"

  // convert the entire degrees-mins-secs coordinates into a float - this is for easier manipulation later
  float latitude_float = arrayToFloat(latitude);
  float longitude_float = arrayToFloat(longitude);

  // remove the degrees part of the coordinates - so we are left with only minutes-seconds part of the coordinates
  latitude_float = latitude_float - (lat_deg_int * 100);
  longitude_float = longitude_float - (lon_deg_int * 100);

  // convert minutes-seconds to decimal
  latitude_float /= 60;
  longitude_float /= 60;

  // add back on the degrees part, so it is decimal degrees
  latitude_float += lat_deg_int;
  longitude_float += lon_deg_int;

  if (strcmp (lat_direction, "S") == 0) {
    latitude_float *= -1;
  }

  if (strcmp (lon_direction, "W") == 0) {
    longitude_float *= -1;
  }

  // format the coordinates nicey - no more than 6 decimal places
  snprintf(lat_return, buff_length, "%2.6f", latitude_float);
  snprintf(lon_return, buff_length, "%3.6f", longitude_float);
}

int arrayToInt(const char* char_array)
{
  int temp;
  sscanf(char_array, "%d", &temp);
  return temp;
}

float arrayToFloat(const char* char_array)
{
  float temp;
  sscanf(char_array, "%f", &temp);
  return temp;
}

const char *nextToken(const char* src, char* buf)
{
  int i = 0;
  while (src[i] != 0 && src[i] != ',')
    i++;
  if (buf)
  {
    strncpy(buf, src, i);
    buf[i] = 0;
  }
  if (src[i])
    i++;
  return src + i;
}

boolean wifi_status(LWifiStatus ws) {
  switch (ws) {
    case LWIFI_STATUS_DISABLED:
      return false;
      break;
    case LWIFI_STATUS_DISCONNECTED:
      return false;
      break;
    case LWIFI_STATUS_CONNECTED:
      return true;
      break;
  }
  return false;
}

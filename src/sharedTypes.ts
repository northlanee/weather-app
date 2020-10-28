export type Geolocation = {
  latitude: number;
  longitude: number;
} | null;

export type City = {
  city: string;
  temp: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  sunrise: number;
  sunset: number;
  description: string;
  icon: string;
  lon: number;
  lat: number;
};

export type Forecast = {
  day: number;
  temp: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  sunrise: number;
  sunset: number;
  description: string;
  icon: string;
};

const apiKey = "19ff8438588c08e35b65d23d6b3a0490";
const domain = "http://api.openweathermap.org/data/";

const api = {
  getCurrentWeather: {
    byCoordinates: async (lat: number, lon: number) => {
      const res = await fetch(
        `${domain}2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    },

    byCity: async (city: string) => {
      const res = await fetch(
        `${domain}2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    },
  },

  getForecastWeather: {
    byCoordinates: async (lat: number, lon: number) => {
      const res = await fetch(
        `${domain}2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    },
  },
};

export { api };

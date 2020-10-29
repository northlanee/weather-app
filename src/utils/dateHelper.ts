export const dateHelper = {
  getDayName: (dt: number): string => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dt * 1000);
    return days[date.getDay()];
  },

  getTime: (dt: number): string => {
    const date = new Date(dt * 1000);
    return `${leadZero(date.getHours())}:${leadZero(date.getMinutes())}`;
  },

  getDate: (dt: number): string => {
    const date = new Date(dt * 1000);
    return `${leadZero(date.getDate())}.${leadZero(date.getMonth() + 1)}`;
  },
};

const leadZero = (num: number): string => {
  if (num < 10) return "0" + num;
  return String(num);
};

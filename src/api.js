const BASE_URL = "http://api.weatherapi.com/v1";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getDailyData = async () => {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=48.519457, 25.031747`)
    return response.json();
}
export const getData = async (year, month, day) => {
    const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=48.519457, 25.031747&date=${[year, month, day].join('-')}`);
    return response.json();
}

const BASE_URL = "http://api.weatherapi.com/v1";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getDailyData = async () => {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=48.519457, 25.031747`, {
        mode: "cors",
    })
    return response.json();
}
export const getData = async (year, month, day) => {
    const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=48.519457, 25.031747&date=${[year, month, day].join('-')}`, {
        mode: "cors",
    });
    return response.json();
}
export const getAstroData = async () => {
    const response = await fetch(`${BASE_URL}/astronomy.json?key=${API_KEY}&q=48.519457, 25.031747`, {
        mode: "cors",
    });
    return response.json();
}

export const getDataOfQuality = async () => {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=48.519457, 25.031747&aqi=yes`, {
        mode: "cors",
    });
    return response.json();
}
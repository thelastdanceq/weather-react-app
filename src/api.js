const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getDailyData = async (q) => {
    try {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${q}`, {
            mode: "cors",
        })
        return response.json();
    } catch (error) {
        console.log("error");
    }

}
export const getData = async (year, month, day, q) => {
    const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${q}&date=${[year, month, day].join('-')}`, {
        mode: "cors",
    });
    return response.json();
}
export const getAstroData = async (q) => {
    const response = await fetch(`${BASE_URL}/astronomy.json?key=${API_KEY}&q=${q}`, {
        mode: "cors",
    });
    return response.json();
}

export const getDataOfQuality = async (q) => {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${q}&aqi=yes`, {
        mode: "cors",
    });
    return response.json();
}
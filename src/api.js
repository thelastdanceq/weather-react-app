const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getDailyData = async (q) => {
    try {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${q}`, {
            mode: "cors",
        })

        if (response.status === 400) {
            throw new Error();
        };
        return response.json();
    } catch (error) {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${"Kiev"}`, {
            mode: "cors",
        })
        return response.json();
    }

}
export const getData = async (year, month, day, q) => {
    try {
        const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${q}&date=${[year, month, day].join('-')}`, {
            mode: "cors",
        });
        if (response.status === 400) {
            throw new Error()
        };
        return response.json();
    } catch (error) {
        const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${"kiev"}&date=${[year, month, day].join('-')}`, {
            mode: "cors",
        });
        return response.json();
    }



}
export const getAstroData = async (q) => {
    try {
        const response = await fetch(`${BASE_URL}/astronomy.json?key=${API_KEY}&q=${q}`, {
            mode: "cors",
        });
        if (response.status === 400) {
            throw new Error()
        };
        return response.json();
    } catch (error) {
        const response = await fetch(`${BASE_URL}/astronomy.json?key=${API_KEY}&q=${"Kiev"}`, {
            mode: "cors",
        });
        return response.json();
    }


}

export const getDataOfQuality = async (q) => {
    try {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${q}&aqi=yes`, {
            mode: "cors",
        });
        if (response.status === 400) {
            throw new Error()
        };
        return response.json();
    } catch (error) {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${"Kiev"}&aqi=yes`, {
            mode: "cors",
        });
        return response.json();
    }

}
export const getNameOfDAy = (day) => {
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

    return week[day];
}

export const getQualityOfAir = (number) => {
    const marks = ["Good", "Moderate", "Unhealthy for sensitive group", "Unhealthy", "Very Unhealthy", "Hazardous"];

    return marks[number - 1]
}


export const getQualityOfDefra = (number) => {
    if (number > 0 && number <= 35) {
        return "Low";
    }
    if (number > 35 && number <= 53) {
        return "Moderate";
    }
    if (number > 54 && number <= 64) {
        return "High";
    }
    if (number > 71) {
        return "Very High";
    }

} 
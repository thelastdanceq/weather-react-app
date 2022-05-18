
import { useState, useEffect } from "react"

export const useLocalStorage = (value, localStorageKey) => {
    if (localStorage.getItem(localStorageKey)) {
        value = localStorage.getItem(localStorageKey);
    }
    const [variable, setVariable] = useState(value);


    useEffect(() => {

        localStorage.setItem('city', variable)
    }, [variable])

    return [variable, setVariable];
}
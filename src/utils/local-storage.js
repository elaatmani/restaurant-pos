import { prefix } from "@/config/app"

export const saveInLocalStorage = (key, value) => {
    localStorage.setItem(prefix + key, JSON.stringify(value));
}

export const getFromLocalStorage = (key, defaultValue = null) => {
    const value = localStorage.getItem(prefix + key);
    return value ? JSON.parse(value) : defaultValue;
}
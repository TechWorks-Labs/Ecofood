import { useState } from 'react';

export default function useSessionStorage() {
    const [value, setValue] = useState();

    const setItem = (key, value) => {
        sessionStorage.setItem(key, value);
        setValue(value);
    }

    const getItem = (key) => {
        const value = sessionStorage.getItem(key);
        setValue(value);
        return value;
    }

    const removeItem = (key) => {
        sessionStorage.removeItem(key);
        setValue = null;
    }

    return { value, setItem, getItem }
}
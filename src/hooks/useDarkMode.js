import { useState } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = (initValue) =>{
    const [darkMode, setDarkMode] = useLocalStorage(initValue);
    return [darkMode, setDarkMode];
}

export default useDarkMode;
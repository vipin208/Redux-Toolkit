// ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { darkTheme, defaultTheme } from '../utility/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultTheme);
  useEffect(()=>{
    themeStore()
  },[])
  const themeStore = async (value) => {
    try {
    const mode=  await AsyncStorage.getItem('theme');
    if(mode!==null){
      mode==="default"?setIsDarkMode(defaultTheme):setIsDarkMode(darkTheme)
    }
    } catch (e) {
      console.log('E-------->', e)
    }
  };

  const changeColor = async () => {
    const newMode = isDarkMode.themeMode === 'dark' ? 'default' : 'dark';
    setIsDarkMode(newMode === 'default' ? defaultTheme : darkTheme);
    try {
      await AsyncStorage.setItem('theme', newMode);
    } catch (e) {
      console.log('Error:', e)
      // saving error
    }
  };
  return (
    <ThemeContext.Provider value={{isDarkMode,changeColor}}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
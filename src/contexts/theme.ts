import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    // variables and functions, both can be added here
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    // passing the context
    return useContext(ThemeContext);
}
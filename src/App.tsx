import './index.css';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

export default function App() {
  const [themeMode, setThemeMode] = useState("light");
  // these functions defined here will be replaced there (in themeContext)
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  // changes the class in html as soon as the themeMode state is changed
  useEffect(
    () => {
      document.querySelector('html')?.classList.remove("dark", "light");
      document.querySelector('html')?.classList.add(themeMode);
    }
  ,[themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
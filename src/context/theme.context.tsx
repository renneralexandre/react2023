import { FC, ReactNode, createContext, useState } from "react";
import { deepPurpleTheme, redTheme } from "../themes";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";

interface ThemeContextData {
  theme: Theme;
  toogleTheme: () => void;
}

export const AppThemeContextProvider = createContext({} as ThemeContextData);

interface AppThemeProviderInterface {
  children: ReactNode;
}

const AppThemeProvider: FC<AppThemeProviderInterface> = ({ children }) => {
  const [theme, setTheme] = useState(deepPurpleTheme);

  const toogleTheme = () => {
    setTheme(theme === redTheme ? deepPurpleTheme : redTheme);
  };

  return (
    <AppThemeContextProvider.Provider value={{ theme, toogleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContextProvider.Provider>
  );
};

export default AppThemeProvider;

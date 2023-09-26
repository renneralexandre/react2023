import { FC, ReactNode, createContext, useContext } from "react";
import { deepPurpleTheme, redTheme } from "../themes";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";

interface ThemeContextData {
  theme: Theme;
  toogleTheme: () => void;
}

function toogleTheme(t: Theme) {
  return t === deepPurpleTheme ? redTheme : deepPurpleTheme;
}

const themeContextData: ThemeContextData = {
  theme: deepPurpleTheme,
  toogleTheme: () => toogleTheme,
};

export const AppThemeContextProvider = createContext(themeContextData);

interface AppThemeProviderInterface {
  children: ReactNode;
}

const AppThemeProvider: FC<AppThemeProviderInterface> = ({ children }) => {
  return (
    <AppThemeContextProvider.Provider value={themeContextData}>
      <ThemeProvider theme={themeContextData.theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContextProvider.Provider>
  );
};

export default AppThemeProvider;

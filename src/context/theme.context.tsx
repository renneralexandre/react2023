import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { deepPurpleTheme, redTheme } from "../themes";
import { createContext, useEffect, useState } from "react";

// Tipo de dados do contexto de Thema
interface ThemeContextData {
  theme: Theme;
}
//Criar contexto para manter o thema global para a aplicacao
const ThemeContext = createContext({} as ThemeContextData);

interface AppThemeProps {
  children: React.ReactNode;
  theme: Theme;
}

const AppThemeProvider: React.FC<AppThemeProps> = ({
  children,
  theme = deepPurpleTheme,
}) => {
  const [themeName, setThemeName] = useState(theme);

  useEffect(() => {
    // setThemeName(theme);
    console.log("teste");
  }, [theme]);

  const toogleTheme = () => {
    console.log("toogleTheme Function");
    console.log(themeName);
    setThemeName((oldThemeName) =>
      oldThemeName === deepPurpleTheme ? redTheme : deepPurpleTheme
    );
  };

  return (
    <ThemeProvider theme={themeName}>
      <CssBaseline />
      <button
        onClick={() => {
          toogleTheme();
        }}
      >
        changeTheme
      </button>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;

// AuthContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  username: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const login = () => {
    setIsAuthenticated(true);
    setUsername("Usuário Logado"); // Substitua por seu próprio nome de usuário
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(null);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

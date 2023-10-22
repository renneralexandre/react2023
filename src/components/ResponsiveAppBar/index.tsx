import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const isAuthenticated = false;
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <AccountCircleTwoToneIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Meu Aplicativo
        </Typography>
        <Button variant="menu2" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button variant="menu2" onClick={() => navigate("/users")}>
          Users
        </Button>
        <Button variant="menu2" onClick={() => navigate("/form")}>
          Form
        </Button>
        {isAuthenticated ? (
          <Typography variant="body2">LOGADO</Typography>
        ) : (
          <LoginTwoToneIcon fontSize="large" color="action" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;

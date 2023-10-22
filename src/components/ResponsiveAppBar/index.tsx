import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import { useAuth } from "../../context/authtentication.context";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AccountCircleTwoToneIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography variant="h6" component="div">
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
            <Typography variant="body2" sx={{ ml: "auto" }}>
              LOGADO
            </Typography>
          ) : (
            <LoginTwoToneIcon fontSize="large" color="action" sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;

import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Button variant="menu2" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button variant="menu2" onClick={() => navigate("/users")}>
          Users
        </Button>
        <Button variant="menu2" onClick={() => navigate("/form")}>
          Form
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;

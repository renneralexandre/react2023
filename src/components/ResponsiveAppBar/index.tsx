import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/users">Users</Link>
        </Button>
        <Button>
          <Link to="/form">Form</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;

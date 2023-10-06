import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/users">Users</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/form">Form</Link>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;

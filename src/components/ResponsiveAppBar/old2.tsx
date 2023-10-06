import { AppBar, Button, Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/users">Users</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;

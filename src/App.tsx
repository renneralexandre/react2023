import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";

const App = () => {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default App;

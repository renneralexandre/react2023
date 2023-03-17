import DrawerAppBar from "components/AppBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
          <DrawerAppBar>
      <Routes>
        {routes().map(({path, element}, index) => (
             <Route key={index} path={path} element={element()} />
        ) )}
      </Routes>
      </DrawerAppBar>
    </BrowserRouter>
  );
};

export default Router;

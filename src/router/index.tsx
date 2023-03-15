import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes().map(({path, element}, index) => (
             <Route key={index} path={path} element={element()} />
        ) )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
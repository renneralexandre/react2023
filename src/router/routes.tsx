import AboutPage from "pages/AboutPage";
import GMUDPage from "pages/GMUDPage";
import HomePage from "pages/HomePage";

// const routes = () => {
//   return (
//     <>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/about" element={<AboutPage />} />
//     </>
//   );
// };

const routes = () => {
  return [
    { path: "/", element: HomePage },
    { path: "/about", element: AboutPage },
    { path: "/gmud", element: GMUDPage },
  ];
};

export default routes;

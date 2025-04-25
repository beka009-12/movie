import Login from "../authatication/login/Login";
import Register from "../authatication/register/Register";
import DetailPage from "../components/detail/DetailPage";
import HomePage from "../components/page/HomePage";

export const links = [
  {
    link: "/",
    element: <HomePage />,
    title: "Home",
  },
  {
    link: "/Detail/:type/:id",
    element: <DetailPage />,
  },
  {
    link: "/Register",
    element: <Register />,
  },
  {
    link: "/Login",
    element: <Login />,
  },
];

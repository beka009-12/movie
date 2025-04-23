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
];

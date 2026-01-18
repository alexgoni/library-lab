import { createBrowserRouter } from "react-router";
import UseFormPage from "./pages/use-form";
import Home from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "use-form",
        element: <UseFormPage />,
      },
    ],
  },
]);

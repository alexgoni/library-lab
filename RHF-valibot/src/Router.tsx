import { createBrowserRouter } from "react-router";
import UseFormPage from "./pages/use-form";
import Home from "./pages/home";
import ControllerPage from "./pages/controller";

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
      {
        path: "controller",
        element: <ControllerPage />,
      },
    ],
  },
]);

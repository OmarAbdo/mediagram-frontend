import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layout/Default";
import { HomePage } from "../../pages/home/ui/Home";
import { LoginPage } from "../../pages/login/ui/Login";
import { RegisterPage } from "../../pages/register/ui/Register";
import { createAuthLoader } from "./authGuard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        // loader: createAuthLoader(), // you can use createAuthLoader() undefined requireAuth to explicity intend that this page should remain public
      },
      {
        path: "login",
        element: <LoginPage />,
        loader: createAuthLoader(false),
      },
      {
        path: "register",
        element: <RegisterPage />,
        loader: createAuthLoader(false),
      },
    ],
  },
]);

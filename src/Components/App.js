import React, { lazy, Suspense } from "react";

import ReactDOM from "react-dom/client";
import Header from "../Components/Header";
import Body from "../Components/Body";

import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "../Components/About";
import Contact from "../Components/Contact.js";
import { Provider } from "react-redux";
import RestarentMenu from "../Components/RestarentMenu";
import appStore from "../Components/utils/appStore.js";
import Cart from "../Components/Cart";
import "./App.css";
import { appRouter } from "./App.js";
import { RouterProvider } from "react-router-dom";
import Error from "../Components/Error";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Grocery = lazy(() => import("../Components/Grocery"));

let AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resMenu/:id",
        element: <RestarentMenu />,
      },
    ],
    errorelement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

export default AppLayout;

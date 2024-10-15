import React from "react";
import "./App.css";
import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:project",
        element: <Project />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

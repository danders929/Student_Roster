import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";
import Root from "./layout/Root.jsx";

import StudentList from "./features/students/students.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentDetails from "./features/students/StudentDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <StudentList /> },
      { path: "/students", element: <StudentList /> },
      { path: "/students/:id", element: <StudentDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import "./Root.less";
import "../features/students/studentList.less";

export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

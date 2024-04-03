import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage.js";
import Programs from "./Programs.jsx";
import AboutUs from "./AboutUs.jsx";
import Admission from "./Admission.jsx";
import Blog from "./Blog.jsx";
import Apply from "./Apply.jsx";

const MyRoutes = () => {
  return (
    <div className="bg-off-white h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Outlet />
            </div>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="programs" element={<Programs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="admission" element={<Admission />} />
          <Route path="blog" element={<Blog />} />
          <Route path="apply" element={<Apply />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";
// styles
import "./css/App.css";
// components
import Header from "./Components/Header";
import Links from "./Components/Links";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
// pages
import Main from "./Pages/Main";
import References from "./Pages/References";
import Portfolio from "./Pages/Portfolio";
import WorkHistory from "./Pages/WorkHistory";
import Genaric from "./Pages/Genaric";

import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <div className="App flex min-h-screen">
      <img
        className="profile-image absolute  full-rounded"
        src="../images/brian.jpg"
        alt="Brian"
        style={{ zIndex: 20 }}
      />
      {/* {left side} */}
      <div className="side-bar min-h-screen">
        <div className="side-name">BRIAN</div>
        <Footer />
      </div>
      {/* {right side} */}
      <div className="right-bar inline w-2/3 min-h-screen">
        <Links />

        {/* <Header name="Brian VanPortfleet" /> */}
        {/*  routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Main pageTitle="Web Developer" name="Brian VanPortfleet" />
            }
          />
          <Route
            path="/Genaric"
            element={
              <Genaric pageTitle="Web Developer" name="Brian VanPortfleet" />
            }
          />
          <Route
            path="/References"
            element={<References pageTitle="References" />}
          />
          <Route
            path="/Portfolio"
            element={<Portfolio pageTitle="Portfolio" />}
          />
          <Route
            path="/WorkHistory"
            element={<WorkHistory pageTitle="Work History" />}
          />
          {/* Using "path='*'" for the fallback route (404 Not Found) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      {/* <References /> */}

      <ContactForm />
    </div>
  );
}

export default App;

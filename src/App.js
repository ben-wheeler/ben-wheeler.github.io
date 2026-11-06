import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GetInTouch from "./components/home/GetInTouch.jsx";

import Experience from "./components/home/Experience";
import MainBodyAbout from "./components/home/MainBodyAbout.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      {
      <MainBodyAbout
        mainBody={mainBody}
        about={about}
        ref={ref}
      />
      }
      {
        experiences.show && (
          <Experience experiences={experiences} />
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
          bookEndUrl={repos.bookEndUrl}
          bookEndId={repos.bookEndId}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import Intro from "./Intro/Intro";
import Schedule from "./Schedule/Schedule";
import Venues from "./Venues/Venues";

const Content = () => {
  return (
    <div>
      <Intro />
      <Venues />
      <Schedule />
    </div>
  );
};

export default Content;

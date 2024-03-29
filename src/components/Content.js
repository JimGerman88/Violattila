import React from "react";
import Intro from "./Intro/Intro";
import Schedule from "./Schedule/Schedule";
import Venues from "./Venues/Venues";
import ResponseForm from "./ResponseForm/ResponseForm";

const Content = () => {
  return (
    <div>
      <Intro />
      <Venues />
      <Schedule />
      <ResponseForm />
    </div>
  );
};

export default Content;

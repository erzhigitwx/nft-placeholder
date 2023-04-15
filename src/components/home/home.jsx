import React from "react";
import Header from "../header/Header";
import HomeBlock from "./homeBlock/HomeBlock";
import Platforms from "./platforms/platforms";
import AboutUs from "./about/about";

function Home() {
  return (
    <>
      <Header />
      <HomeBlock />
      <Platforms />
      <AboutUs />
    </>
  );
}

export default Home;

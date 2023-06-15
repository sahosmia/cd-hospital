import React from "react";
import Hero from "../component/Hero";
import Offer from "../component/Offer";
import About from "../component/About";
import BloodGroupList from "../component/blood/BloodGroupList";

function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <BloodGroupList />
      </div>
    </>
  );
}

export default Home;

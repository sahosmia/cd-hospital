import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center pt-20 pb-24 xl:pt-60 xl:pb-72 xl:pt-80 xl:pb-96">
        <div className="container">
          <h6 className="text-xl lg:text-3xl leading-tight lg:w-1/2 w-full pb-4">
            You can get
          </h6>
          <h4 className="text-3xl lg:text-7xl text-light    leading-tight lg:w-1/2 w-full pb-5 lg:pb-10">
            Doctor, Blood, Hospital Information
          </h4>
          <button className="text-light font-bold bg-main px-5 py-4 lg:px-7 lg:py-5 rounded-xl flex items-center gap-2">
            Find Your Doctor
            <span className="text-main bg-light w-7 h-7 rounded-full text-center flex justify-center items-center">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;

import React from "react";
import Header from "./Header/Header";
import WeatherBord from "../WeatherDashBoard.jsx/WeatherBord";

const Page = () => {
  return (
    <>
      <Header></Header>
      <main>
        <section className="">
          <WeatherBord></WeatherBord>
        </section>
      </main>
    </>
  );
};

export default Page;

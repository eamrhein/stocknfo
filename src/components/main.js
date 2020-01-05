import React from "react";
import Stock from "./stockChartWidget";
import News from "./newsFeedWidget";

const Main = () => {
  return (
    <main className="main">
      <Stock />
      <News />
    </main>
  );
};
export default Main;

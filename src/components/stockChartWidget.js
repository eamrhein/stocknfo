import React, { useState, useEffect } from "react";
import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from "recharts";
const RED = "#EB5333";
const GREEN = "#67CF9A";

const Stock = () => {
  let [chartState, setChartState] = useState([
    { name: "Page A", uv: 3892, pv: 28900, amt: 2800 },
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 }
  ]);
  let [timeStamp, setTimeStamp] = useState("");
  let [lineColor, setLineColor] = useState(GREEN);
  let renderLineChart = () => {
    const renderTimeStamp = () => <div className="timestamp">{timeStamp}</div>;
    return (
      <LineChart width={400} height={400} data={chartState}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Tooltip />
      </LineChart>
    );
  };
  return (
    <div className="StockChart">
      <div className="chart-header">
        <h2>Balance</h2>
        <h2>Odometer</h2>
        <h3>Net</h3>
      </div>
      {chartState.length !== 0 ? (
        <div className="chart-wrapper">{renderLineChart()}</div>
      ) : (
        <div className="chart-Wraper"><h1>Dang it bobby</h1></div>
      )}
    </div>
  );
};
export default Stock;

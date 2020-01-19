import React, { useState, useEffect } from "react";
import About from "./newsFeedWidget";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from "recharts";
import styled from "styled-components";
const StockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  bottom: 5vw;
`;
const ChartWrapper = styled.div``;
const CompanyName = styled.h1`
  text-align: center;
  line-height: 42px;
  font-size: 36px;
  font-weight: 500;
`;
const Price = styled.h3`
  font-size: 36px;
  font-weight: 400;
  line-height 42px;
  margin-left: 1rem;
`;
const ChangeStyle = styled.div`
  margin-left: 1rem;
`;
const RangeGroup = styled.div`
  cursor: pointer;
  display: flex;
  font-weight: 600;
  margin-left: 1rem;
  #active {
    color: #7b1fa2;
  }
`;
const RangeBtn = styled.div`
  font-size: 0.8rem;
  margin: 0rem 0.25rem;
`;

const Stock = ({ stocks, fetchStockChart, current }) => {
  let [chartState, setChartState] = useState([]);
  let [company, setCompany] = useState("");
  let [price, setPrice] = useState("");
  let [range, setRange] = useState("5Y");
  let [change, setChange] = useState("");
  useEffect(() => {
    fetchStockChart(current, range);
  }, [fetchStockChart, range, current]);

  useEffect(() => {
    if (stocks[current]) {
      const parseChange = method => {
        let currentPrice = parseFloat(stocks[current].latestPrice);
        let percent = parseFloat(stocks[current][method]);
        let prevPrice = currentPrice - currentPrice * percent;
        percent = (percent * 100).toFixed(2);
        let diff = (currentPrice - prevPrice).toFixed(2);
        return [diff, percent];
      };
      function renderChange() {
        let rangeStr = "";
        let diff, percent;
        switch (range) {
          case "1D":
            [diff, percent] = parseChange("changePercent");
            rangeStr = " Today";
            break;
          case "1M":
            [diff, percent] = parseChange("month1ChangePercent");
            rangeStr = " Past Month";
            break;
          case "3M":
            [diff, percent] = parseChange("month3ChangePercent");
            rangeStr = " Past 3 Months";
            break;
          case "1Y":
            [diff, percent] = parseChange("year1ChangePercent");
            rangeStr = " Past Year";
            break;
          case "5Y":
            [diff, percent] = parseChange("year5ChangePercent");
            rangeStr = " Past 5 Years";
            break;
          default:
            break;
        }
        let sign = Math.sign(diff) === 1 ? "+" : null;
        let changeComp = (
          <ChangeStyle>
            <span>
              {sign}${diff} ({percent}%)
            </span>
            <span>{rangeStr}</span>
          </ChangeStyle>
        );
        setChange(changeComp);
      }
      setChartState(stocks[current].chart);
      setCompany(stocks[current].company.securityName);
      setPrice(stocks[current].latestPrice.toFixed(2));
      renderChange();
    }
  }, [stocks, current, range]);
  const handleRange = e => {
    let text = e.target.innerText;
    switch (text) {
      case "1D":
        setRange("1D");
        setChartState(stocks[current].intraday);
        break;
      case "1M":
        setRange("1M");
        setChartState(stocks[current].chart);
        break;
      case "3M":
        setRange("3M");
        setChartState(stocks[current].chart);
        break;
      case "1Y":
        setRange("1Y");
        setChartState(stocks[current].chart);
        break;
      case "5Y":
        setRange("5Y");
        setChartState(stocks[current].chart);
        break;
      default:
        break;
    }
  };
  let renderLineChart = () => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartState} width={400} height={400}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis domain={["dataMin", "dataMax"]} hide={true} />
          <XAxis hide={true} dataKey="label" />
          <Legend />
          <Line
            connectNulls={true}
            name="USD $"
            type="monotone"
            dot={false}
            dataKey="close"
            strokeWidth={2.5}
            stroke="#7B1FA2"
          />
          <Tooltip
            separator=""
            offset={-40}
            position={{ y: -15 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  return (
    <StockWrapper>
      <CompanyName>{company}</CompanyName>
      <Price>${price}</Price>
      {change}
      {chartState.length !== 0 ? (
        <ChartWrapper>{renderLineChart()}</ChartWrapper>
      ) : (
        <div className="chart-Wraper">...Loading</div>
      )}
      <RangeGroup>
        <RangeBtn id={range === "1D" ? "active" : null} onClick={handleRange}>
          1D
        </RangeBtn>
        <RangeBtn id={range === "1M" ? "active" : null} onClick={handleRange}>
          1M
        </RangeBtn>
        <RangeBtn id={range === "3M" ? "active" : null} onClick={handleRange}>
          3M
        </RangeBtn>
        <RangeBtn id={range === "1Y" ? "active" : null} onClick={handleRange}>
          1Y
        </RangeBtn>
        <RangeBtn id={range === "5Y" ? "active" : null} onClick={handleRange}>
          5Y
        </RangeBtn>
      </RangeGroup>
      {stocks[current] ? (
        stocks[current]["company"] ? (
          <About stock={stocks[current]} />
        ) : (
          "...loading"
        )
      ) : null}
    </StockWrapper>
  );
};
export default Stock;

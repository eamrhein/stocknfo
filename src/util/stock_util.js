/* eslint-disable import/prefer-default-export */
const API_TOKEN = 'pk_167d7251ba544870a71072021a666288';
const BASE_URL = 'https://cloud.iexapis.com/stable/stock';
export async function fetchStockChart(ticker, range) {
  let interval;
  switch (range) {
    case '5y':
      interval = 48;
      break;
    case '1Y':
      interval = 9;
      break;
    case '3M':
      interval = 4;
      break;
    case '1M':
      interval = 1;
      break;
    case '1D':
      interval = 12;
      break;
    default:
      interval = 100;
      break;
  }
  const response = await fetch(
    `${BASE_URL}/${ticker}/batch?range=${range}&chartInterval=${interval * 10}&types=company,quote,chart,stats&token=${API_TOKEN}`,
  ).catch((err) => console.log(err));
  const intraDay = await fetch(
    `${BASE_URL}/${ticker}/batch?&types=chart&range=1D&chartInterval=12&token=${API_TOKEN}`,
  ).catch((err) => console.log(err));
  const intraParsed = await intraDay.json();
  const parsed = await response.json();
  parsed.intraDay = intraParsed.chart;
  return parsed;
}

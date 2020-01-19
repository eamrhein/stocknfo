const API_TOKEN = "pk_589ed06b435744fbb36ab24f30c0881e";

export async function fetchStockChart(ticker, range) {
  let interval;
  switch (range) {
    case "5y":
      interval = 48;
      break;
    case "1Y":
      interval = 9;
      break;
    case "3M":
      interval = 4;
      break;
    case "1M":
      interval = 1;
      break;
    case "1D":
      interval = 12;
      break;
    default:
      interval = 100;
      break;
  }
  const response = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/batch?range=${range}&chartInterval=${interval}&types=company,quote,chart,stats&token=${API_TOKEN}`
  );
  const intraDay = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/batch?&types=chart&range=1D&chartInterval=12&token=${API_TOKEN}`
  );
  let intraParsed = await intraDay.json();
  let parsed = await response.json();
  parsed.intraDay = intraParsed.chart;
  return parsed;
}

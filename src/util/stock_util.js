// export async const fetchCompanyInfo = (ticker) => (

//     $.ajax({
//         method: "GET",
//         url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/batch?types=quote&filter=description,exchange,companyName,city,state,CEO,employees&token=${API_TOKEN}`
//     })
// )
// export const fetchStockStats = (ticker) => (
//     $.ajax({
//         method: "GET",
//         url: `https://cloud.iexapis.com/stable/stock/${ticker}/stats/batch?types=quote&filter=peRatio,avg10Volume,dividendYield,week52high,week52low,marketcap&token=${API_TOKEN}`
//     })
// )
// export const fetchStockChart = (ticker,range) => (
//     $.ajax({
//         method: "GET",
//         url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/${range}/batch?types=quote&token=${API_TOKEN}`
//     })
// )
// export const fetchIntradayData = (ticker) => (
//     $.ajax({
//         method: "GET",
//         url: `https://cloud.iexapis.com/stable/stock/${ticker}/batch?&types=quote,chart&range=1D&chartInterval=5&token=${API_TOKEN}`
//     })
// )
// export const fetch5YrHistoricalData = (ticker) => (
//     $.ajax({
//         method: "GET",
//         url: `https://cloud.iexapis.com/stable/stock/${ticker}/batch?&types=quote,chart&range=5Y&token=${API_TOKEN}`
//     })
// )
// export const fetch1YrHistoricalData = (ticker) => (
//     $.ajax({
//         method: "GET",
//         url: `https://cloud.iexapis.com/stable/stock/${ticker}/batch?&types=quote,chart&range=1Y&token=${API_TOKEN}`
//     })
// )
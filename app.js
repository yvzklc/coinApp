const tbody = document.querySelector(".tbody");
const options = {
  headers: {
    "Content-Type": "application/json",
    "x-access-token":
      "coinranking76e780e8a842f1f70023730d3aaad2d6a2bebf46f4e28e76",
  },
};

const API_URL = "https://api.coinranking.com/v2/coins', options";
const getData = () => {
  fetch("https://api.coinranking.com/v2/coins", options)
  .then((res) => { 
    if(!res.ok){
        throw new error("Something went wrong",res.status)
    }
    return res.json() 
})
.then((veri) => showData(veri))
.catch((err) => console.log(err,res.status))
}

      

const showData = (veri) => {
  // const { ...coins} = veri.data;
  // const { name, symbol, price, iconUrl, change, color } = coins;
      var x = {data: {coins: [name, symbol, price, iconUrl, change, color]}} = veri
    //    console.log(ilkkedi)

   for(let i=0;i<50;i++){
    tbody.innerHTML +=   `<tr>
    <th scope="row">${x.data.coins[i].rank}</th>
    <td>${x.data.coins[i].name}</td>
    <td>Otto</td>
    <td>@mdasdo</td>
  </tr>`
  }

}
// {
//   "uuid": "Qwsogvtv82FCd",
//   "symbol": "BTC",
//   "name": "Bitcoin",
//   "color": "#f7931A",
//   "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
//   "marketCap": "726831506462",
//   "price": "37182.32723357054",
//   "listedAt": 1330214400,
//   "tier": 1,
//   "change": "1.80",
//   "rank": 1,
//   "sparkline": [
//       "36519.45831668425",
//       "36494.62995791668",
//       "36522.047143687596",
//       "36497.251753666555",
//       "36544.32498155906",
//       "36609.17762042013",
//       "36596.90893543231",
//       "36759.61231252904",
//       "36893.67649919421",
//       "36946.33872499881",
//       "36988.259249183466",
//       "37012.12551282414",
//       "37412.143095654465",
//       "37308.88031199907",
//       "37346.92926526186",
//       "37311.17818858464",
//       "37250.11574823003",
//       "37180.347095995945",
//       "37182.153706177814",
//       "37182.79478144423",
//       "37198.95523787212",
//       "37210.92819162083",
//       "37184.94975531804",
//       null
//   ],
//   "lowVolume": false,
//   "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
//   "24hVolume": "14995081847",
//   "btcPrice": "1"
// }


getData();

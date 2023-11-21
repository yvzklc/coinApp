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
      if (!res.ok) {
        throw new error("Something went wrong", res.status);
      }
      return res.json();
    })
    .then((Data) => DataList(Data))
    .catch((err) => console.error(err, res.status));
};

const DataList = function(Data){
  var x = ({
    data: {
      coins: [name, symbol, price, iconUrl, change, color],
    },
  } = Data);
 
  
  for (let i = 0; i < 50; i++) {
    inner = (y) => {
      tbody.innerHTML += `<tr>
      <th scope="row">${x.data.coins[i].rank}</th>
      <td style="color: ${x.data.coins[i].color}">${x.data.coins[i].name}</td>
      <td style="color: ${x.data.coins[i].color}">${x.data.coins[i].symbol}</td>
      <td>${x.data.coins[i].price}</td>
     
      <td> <img style="width: 35px; height: 35px;" src="${x.data.coins[i].iconUrl}" alt=""></td>
      <td class="${y}">${x.data.coins[i].change}</td>
      
    </tr>`;
    };
 
   ValueKeyPress = () => {
    document.querySelector(".tbody").innerHTML = ""

    for(let i = 0; i<50;i++){
     
      search = (y) => {
        tbody.innerHTML += `<tr>
        <th scope="row">${x.data.coins[i].rank}</th>
        <td style="color: ${x.data.coins[i].color}">${x.data.coins[i].name}</td>
        <td style="color: ${x.data.coins[i].color}">${x.data.coins[i].symbol}</td>
        <td>${x.data.coins[i].price}</td>
       
        <td> <img style="width: 35px; height: 35px;" src="${x.data.coins[i].iconUrl}" alt=""></td>
        <td class="${y}">${x.data.coins[i].change}</td>
        
      </tr>`;
      };
    
      const input = document.querySelector("input")
      let coinName = [x]
      let value = input.value
    
     
      let filtered = coinName.filter((coin) =>
      coin.data.coins[i].name.toLowerCase().includes(value.toLowerCase())
    );
    filtered.forEach((coin) => {
    
      if (x.data.coins[i].change < 0 ) {
      search("red");
    } else if (x.data.coins[i].change > 0) {
      search("green");
    } else {
      search("gray");
    
}
   
    });
  
  
   
    
    }
  }
    if (x.data.coins[i].change < 0 ) {
      inner("red");
    } else if (x.data.coins[i].change > 0) {
      inner("green");
    } else {
      inner("gray");
    
}
  }
};


getData();

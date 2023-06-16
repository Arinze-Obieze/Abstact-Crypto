const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/bitcoin',
  params: {
    localization: 'true',
    tickers: 'true',
    market_data: 'true',
    community_data: 'true',
    developer_data: 'true',
    sparkline: 'false'
  },
  headers: {
    'X-RapidAPI-Key': '14e2617be1msh3c78f8e9c1f46e1p152996jsn972a5e39f901',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
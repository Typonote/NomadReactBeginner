import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1/tickers";

function Get_Coin(endpoint) {
  return axios.get(BASE_URL + endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const CoinApi = {
  Get_Coin,
};

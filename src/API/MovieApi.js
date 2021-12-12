import axios from "axios";

const BASE_URL =
  "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";

function Get_Movie(endpoint) {
  return axios.get(BASE_URL + endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const MovieApi = {
  Get_Movie,
};

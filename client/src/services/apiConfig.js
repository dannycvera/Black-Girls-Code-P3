import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://black-girl-code-events.herokuapp.com/api/events",
  development: "http://localhost:3000/api/events",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;

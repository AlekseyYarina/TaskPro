import axios from "axios";

const instance = axios.create({
  baseURL: "https://taskpro-api-nmqb.onrender.com/",
});

export default instance;
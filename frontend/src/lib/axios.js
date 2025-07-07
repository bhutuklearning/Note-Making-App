// import axios from "axios";

// const api = axios.create({
//     baseURL: "http://localhost:12000/api",
// });

// export default api;


import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:12000/api" : "/api";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;
import axios from "axios";

const facebookApi = axios.create({
    baseURL: "https://graph.facebook.com/v21.0"
})


export default facebookApi;
import axios from "axios";
import authHeader from "../auth/auth-header";

export default axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        "Content-type": "application/json",
        ...authHeader()
    }
});
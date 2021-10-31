import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_SERVER_URL + "/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", {headers: authHeader()});
};

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", {headers: authHeader()});
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", {headers: authHeader()});
};

const user_service = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
}

export default user_service;
import http from "./http-common";

const getAll = (params) => {
    return http.get("/hall", {params});
};

const get = id => {
    return http.get(`/hall/${id}`);
};

const save = data => {
    return http.post("/hall", data);
};

const remove = id => {
    return http.delete(`/hall/${id}`);
};

const findByCinemaId = cinemaId => {
    return http.get(`/hall?cinemaId=${cinemaId}`);
};

const exportedObject = {
    getAll,
    get,
    save,
    remove,
    findByCinemaId
};

export default exportedObject;
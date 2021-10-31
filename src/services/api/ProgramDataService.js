import http from "./http-common";

const getAll = (params) => {
    return http.get("/program", {params});
};

const get = id => {
    return http.get(`/program/${id}`);
};

const save = data => {
    return http.post("/program", data);
};

const remove = id => {
    return http.delete(`/program/${id}`);
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
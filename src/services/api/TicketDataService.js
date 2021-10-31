import http from "./http-common";

const getAll = (params) => {
    return http.get("/ticket", {params});
};

const get = id => {
    return http.get(`/ticket/${id}`);
};

const save = data => {
    return http.post("/ticket", data);
};

const remove = id => {
    return http.delete(`/ticket/${id}`);
};

const exportedObject = {
    getAll,
    get,
    save,
    remove
};

export default exportedObject;
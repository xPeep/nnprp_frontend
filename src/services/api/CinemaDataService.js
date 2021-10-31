import http from "./http-common";

const getAll = (params) => {
    return http.get("/cinema", {params});
};

const get = id => {
    return http.get(`/cinema/${id}`);
};

const save = data => {
    return http.post("/cinema", data);
};

const remove = id => {
    return http.delete(`/cinema/${id}`);
};

const exportedObject = {
    getAll,
    get,
    save,
    remove
};

export default exportedObject;

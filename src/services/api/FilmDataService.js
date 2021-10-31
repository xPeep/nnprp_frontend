import http from "./http-common";

const getAll = (params) => {
    return http.get("/film", {params});
};

const get = id => {
    return http.get(`/film/${id}`);
};

const save = data => {
    return http.post("/film", data);
};

const remove = id => {
    return http.delete(`/film/${id}`);
};

const findByTitle = title => {
    return http.get(`/tutorials?title=${title}`);
};

const exportedObject = {
    getAll,
    get,
    save,
    remove,
    findByTitle
};

export default exportedObject;
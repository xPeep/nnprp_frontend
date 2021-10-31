import React, {useEffect, useState} from "react";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";

const GenericList = ({url, title, ListItem, parentId}) => {
    // let {data, error, isPending} = useFetch(url);
    const [data, setData] = useState([]);

    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(5);

    const pageSizes = [5, 10, 25];

    const getRequestParams = (page, pageSize) => {
        let params = {};

        if (page) {
            params["page"] = page - 1;
        }

        if (pageSize) {
            params["size"] = pageSize;
        }

        return params;
    };

    const retrieveData = () => {
        const params = getRequestParams(page, pageSize);
        console.log("getting data");

        axios.create().get(url, {params})
            .then((response) => {
                const {content: newData, totalPages} = response.data;
                setData(newData);
                setCount(totalPages);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(retrieveData, [url, page, pageSize]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    return (
        <div className="home">
            {data &&

            <div className="blog-list">
                <h2>{title}</h2>

                <div className="mt-3">
                    <Pagination
                        className="my-3"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                </div>

                {/*TODO add skeleton*/}
                {data && data.map((item) => (
                    <ListItem item={item} listKey={item.id} parentId={parentId}/>
                ))}

                {"Items per Page: "}
                <select onChange={handlePageSizeChange} value={pageSize}>
                    {pageSizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>}
        </div>
    );
};

export default GenericList;
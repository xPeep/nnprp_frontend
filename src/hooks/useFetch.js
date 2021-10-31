import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
            .then((res) => {
                if (!res.ok) {
                    throw Error("could not fetch the data for that resource");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("Fetch aborted");
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        return () => abortCont.abort();
    }, [url]);
    console.log("return data", data);

    return {data, isPending, error};
};

export default useFetch;

import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true)
            const resFetch = await fetch(url)
            if (!resFetch.ok) {
                throw new Error("fetch error!")
            }
            const resJson = await resFetch.json();
            setData(resJson)

        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }


    }

    useEffect(
        () => {
            fetchData();
            return () => { }

        }

        , [url])

    return [
        data,
        loading,
        error
    ]
}
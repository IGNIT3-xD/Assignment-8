import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(json => setData(json))
            .finally(() => setLoading(false))
    }, [])

    return { data, loading };
}

export default useData;
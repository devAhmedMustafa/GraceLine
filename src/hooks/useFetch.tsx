import { useEffect, useState } from "react";
import api from "../utils/Api/Axios";

export default function useFetch(url: string){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetch = async ()=>{
        const response = await api.get(url);
        return response;
    }

    useEffect(()=>{
        setLoading(true);
        fetch()
        .then((response)=>{
            setData(response.data);
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setLoading(false);
        });
    }, [url])

    return {data, error, loading}
}
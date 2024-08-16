import { useCallback, useState } from "react";
import api from "../utils/Api/Axios";

export default function usePost(url: string){
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const post = useCallback( async (body: any)=>{
        setLoading(true);
        setError(null);

        try{
            const res : any = await api.post(url, body);

            const result = await res.data;
            setData(result);
            
        } catch(err: any){
            setError(err.message)
        } finally{
            setLoading(false)
        }


    }, [url] )

    return {data, error, loading, post}
}
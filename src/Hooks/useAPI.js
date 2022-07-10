import axios from "axios"
import { useState, useEffect, useCallback } from "react"

export default function useAPI(Url, defaultValue = []) {
    //would handle loading,  data setting and loading error
    const [products, setData] = useState(defaultValue)
    const [isLoading, setIsLoading] = useState(false)
    const [loadError, setLoadError] = useState(null)

    const fetchProducts = useCallback (async()=> {
        setIsLoading(true);
        try{
        const res = await axios.get(Url);
        setData(res.data);
        setIsLoading(false)
        }
        catch(e){
            setIsLoading(false)
            setLoadError(e)
        }
    },[Url]);

    useEffect( () => {
        fetchProducts();
    },[fetchProducts] )

    return {
        products,
        isLoading,
        loadError
    }
}
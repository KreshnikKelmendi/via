import React, {useState, useEffect} from "react";

const FetchData = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchDataEvents = async () => {
           setLoading(true);
           try{
              const res = await fetch(url)
              const json = await res.json()

              setData(json)
              setLoading(false)
           } catch (error) {
              setError(error)
              setLoading(true)
           }
        }
        fetchDataEvents()
    }, [url])

    return { loading, error, data }
  
}

export default FetchData;
import { useCallback, useEffect,useState } from "react";

export const getData=async(url)=>{
    const data=await fetch(url);
    return data.json();
}

export const useGetData=(endpoint="character")=>{
    const [data,setData]=useState();
    const [loading, setLoading]= useState(false);
    const update=useCallback(async()=>{
        setLoading(true);
        try{
            let response=await getData(`https://rickandmortyapi.com/api/${endpoint}`);
            let results=response.results;
            while(response.info.next!==null){
                response=await getData(response.info.next);
                results.push(...response.results);
            }
            setData(results);
            setLoading(false)
        }catch(error){
            console.error(error);
            setLoading(false);
        }
    },[endpoint]);
    useEffect(()=>{
        update();
    },[update])
    return{
        data,
        loading
    }
}
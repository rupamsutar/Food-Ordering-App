import { useEffect, useState } from "react";
import { RESTAURANT_INFO } from "./constants";


const useResInfo = (resId) => {
    const [ oneResInfo, setOneResInfo ] = useState();
    
    const fetchData = async() => {
        const restaurantInfo = RESTAURANT_INFO.replace("{{restaurant_id}}", resId);
        const data = await fetch(restaurantInfo);
        const jsonData = await data.json();
        setOneResInfo(jsonData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return oneResInfo;
}

export default useResInfo;
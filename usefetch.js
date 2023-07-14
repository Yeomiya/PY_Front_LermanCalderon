import { useState, useEffect } from "react";
import axios from 'axios';
export function useFetch(url){

    const data = useState(null);

        useEffect(() => {
            fetch(url)
                .then ((response) => response.json())
                .then ((data) => setdata(data));
        }, []);
        return { data };
} 

//http://localhost:3000/API/eventos
//axios.get(`$http://localhost:3000/API/eventos`)
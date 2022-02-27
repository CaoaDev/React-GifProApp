import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs =( anime ) => {
    const [first, setFirst] = useState({
        images: [],
        loading: true
    });

    useEffect( () => {
        getGifs ( anime )
        .then ( imgs => {
                setFirst ({
                    images: imgs,
                    loading: false
                });
        })
    },[ anime ]);
    
    return first;
}
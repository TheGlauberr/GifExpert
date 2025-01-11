import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


  const getInformation = async ()=>{
    const newImages = await getGifs(category);
    setimages(newImages);
    setIsLoading(false);
  }
    useEffect(()=>{
      getInformation();
    },[] )
    
    return {
        images: images,
        isLoading: isLoading
    }
}
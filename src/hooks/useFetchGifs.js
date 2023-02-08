import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [])


    return {
        images, // es lo mismo que poner images: images al tener el mismo nombre se puede simplificar 
        isLoading
    }

}


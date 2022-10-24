import React, {useEffect, useState} from "react";
import getGifs from '../services/getGifs';
import Gif from "./Gif";

export default function ListOfGifs ({ keyword }){

    const [gifs, updateGifs] = useState([]);

    useEffect(() => {
      getGifs({ keyword })
      .then(gifs => updateGifs(gifs))
    }, [ keyword ])

    return(
        gifs.map(simpleGif => 
            <Gif 
              key={simpleGif.id}
              id={simpleGif.id} 
              title={simpleGif.title} 
              url={simpleGif.url} 
            />
          )
    )
}
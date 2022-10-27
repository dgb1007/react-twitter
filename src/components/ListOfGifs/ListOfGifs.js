import React from "react";
import Gif from "../Gif/Gif";

export default function ListOfGifs ({ gifs }){

    return(
        <div className="listGifs">
          {
            gifs.map(simpleGif => 
              <Gif 
                key={simpleGif.id}
                id={simpleGif.id} 
                title={simpleGif.title} 
                url={simpleGif.url} 
              />
            )
          }
        </div>
    )
}
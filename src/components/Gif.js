import React from "react";
import './Gif.css'

function Gif({title, id, url}){
    return(
        <div className="Gif">
              <h4>{title}</h4>
              <img key={id} alt={title} src={url} />
            
        </div>
    )
}

export default Gif;
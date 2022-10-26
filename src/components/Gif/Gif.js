import React from "react";
import './Gif.css'
import {Link} from "wouter"

function Gif({title, id, url}){
    return(
        <div className="Gif">
            <Link href={`/gif/${id}`} >
                <h4>{title}</h4>
              <img key={id} alt={title} src={url} />
            </Link>
        </div>
    )
}

export default Gif;
import React, {useState, useEffect} from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import getGifs from "../../services/getGifs";

export default function SearchResults ( {params} ) {
    const { keyword } = params;
    const [gifs, updateGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
      getGifs({ keyword })
      .then(gifs => {
        updateGifs(gifs);
        setLoading(false);
      })
    }, [ keyword ])

    if(loading) return <i>Cargando...</i>

    return(
        <>
        <ListOfGifs gifs={gifs}></ListOfGifs>
        </>
    )
}
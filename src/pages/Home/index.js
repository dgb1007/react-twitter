import React, { useState } from "react";
import { Link, useLocation} from "wouter";

const POPULARES_GUFS= ["Panda", "Rick", "Morty", "Gato"]

export default function Home () {
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useLocation('');

    console.log(location);
    const handlerChange = evt => setKeyword(evt.target.value)

     const handlerSumbit = evt =>{
        evt.preventDefault();
        setLocation(`/search/${keyword}`);
    }

    return (
        <>
            <h1>APP</h1>
            <form onSubmit={handlerSumbit}>
                <input
                    placeholder="Search gif here..."
                    type='text'
                    value={keyword}
                    onChange={handlerChange}
                />
                <button>Buscar</button>
            </form>
            <ul>
                {
                    POPULARES_GUFS.map(search => (
                        <li key={search}>
                            <Link href={`/search/${search}`}> Gifs de {search} </Link>
                        </li>
                    ))
                }
            </ul>
            
        </>
    )
}
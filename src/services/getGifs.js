const apiKey = '2nL8ZoBuX9coPKfRnFYZvAS4qSLtFaxV'

//Agregarle asyn await
//agregarle el catch

//Preguntar como funciona el parametro  ({keyword = 'morty'} = {}) del metodo getGifs
export default function getGifs({keyword = 'morty'} = {}){
    //const keyword = 'panda'
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    console.log(apiUrl);
    return fetch(apiUrl)
    .then(res => res.json())
    .then(result =>{
        const {data = []} = result
        if (Array.isArray(data)){
            console.log(data);
            const listGifs = data.map(image => image.images.fixed_height_small.url)
            return listGifs;
        }
      
    });
}
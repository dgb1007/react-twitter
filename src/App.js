import React, {useEffect, useState} from 'react'
import './App.css';
import getGifs from './services/getGifs';



function App() {
  const [gifs, updateGifs] = useState([]);

  useEffect(() => {
    getGifs({keyword: 'panda'}).then(gifs => updateGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(simpleGif => <img key={simpleGif} alt="" src={simpleGif} />)
        }
        
      </section>
    </div>
  );
}

export default App;

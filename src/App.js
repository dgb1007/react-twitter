import React from 'react'
import './App.css';
import logo from './assets/logo-twitter.svg'
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults'

import { Link, Route } from "wouter"

function App() {
  

  return (
    <div className="App">
      <section className="App-content">
        
        <Link 
          href='/' > 
            <img src={logo} alt='Logo' />
        </Link>

        <Route 
          path='/' 
          component={Home}
        />

        <Route 
          path='/search/:keyword' 
          component={SearchResults}
        />

        <Route 
          path='/gif/:id'
          component={Detail}  
        />
        
            
      </section>
    </div>
  );
}

export default App;

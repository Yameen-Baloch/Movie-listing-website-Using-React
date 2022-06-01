import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";import Home from './components/Home/Home';
import NavBar from './components/Navbar';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/footer/Footer'

import './App.scss'
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <div className='container'>
      <Routes>
        <Route path='/' index element= {<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetails />} />
        <Route path='*' element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
 
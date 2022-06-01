import React, {useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import MoviesApi from '../../common/api/MoviesApi'
import { ApiKey } from '../../common/api/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() =>{ 
    const movieText = "Harry";
    const fetchMovies = async () =>{
      const response = await MoviesApi.get(`?apikey=${ApiKey}&s=${movieText}&type=series`)
       .catch((err) =>{
         console.log("Err :", err);
       }) 
       dispatch(addMovies(response.data))
       
    };

    fetchMovies()
  }, []);

  return (
    <>
    <div className='banner-img'>
      <MovieListing />
    </div>
    </>
  )
}

export default Home
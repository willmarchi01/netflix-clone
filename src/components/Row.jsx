import { useState, React, useEffect } from 'react'
import axios from 'axios';
import Movie from './Movie';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovie(response.data.results)
        });
    }, [fetchURL]);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
      };
    

  return (
    <>
        <h2 className='text-white font-bold md-text-xl p-4'>{title}</h2> 
        <div className='relative flex items-center group'>
                <BsFillArrowLeftCircleFill
                onClick={slideLeft}
                className='text-white left-0 absolute opacity-50 z-10 hover:opacity-100 cursor-pointer hidden group-hover:block' size={40} />
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
                <BsFillArrowRightCircleFill
                onClick={slideRight}
                className='text-white right-0 absolute opacity-50 z-10 hover:opacity-100 cursor-pointer hidden group-hover:block' size={40} />
        </div> 
    </>
  )
}

export default Row;
import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getgif } from '../helpers/getGifs';

export const GifGrid = ( { anime } ) => {
  const { images, loading } = useFetchGifs( anime );

  // const [images, setImages] = useState([]);
  // useEffect( () => {
  //   getgif( anime )
  //   .then( setImages );
  // }, [ anime ]);

  return (
    <div>
      <h3 className= 'animate__bounceOutDown'>{ anime } </h3> 
      { loading && <p className= 'animate__fadeIn'>Loading</p>}
      <div className='card-grid'>
        {
          images.length > 0
            ?
              images.map ( ( img )=>(
                <GifGridItem 
                  key = { img.id }
                  { ...img }
                />
              ))
            :
              <p>no se encontro informacion de { anime }</p>
        }
      </div>
    </div>
  )
};

GifGrid.prototype = {
  category: PropTypes.string.isRequired
}
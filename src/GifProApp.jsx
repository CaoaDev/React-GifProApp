import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifProApp = ( {defaultAnime= [] } ) => {
    // const animes = ['One Punch Man', 'Samurai X', 'Dragon Ball'];
    // const [ anime, setAnime ] = useState (['']);
    
    const [ anime, setAnime ] = useState ( defaultAnime );

    // const handleAdd = () => {
    //     setAnime( anime => [...anime, 'HunterxHunter', 'Madoka Magica', 'Kimetsu'] );
    // }
    // para agregar una lista a setanimes

    return (
        <>
        <h2><center>GifProApp</center></h2> 
        <AddCategory setAnime={ setAnime } />
        <hr/>
    
        <h1>
            <ol>
                {
                    anime.map( anime =>(
                         <GifGrid 
                         key={ anime }
                         anime ={ anime } />
                         ))
                }
            </ol>
        </h1>
        </>
    )
}

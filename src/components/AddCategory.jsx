import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setAnime } ) => {
    const [inputValue, setImputValue] = useState( '' )
    const handleInputChange = ( e ) => {
        setImputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( 'handleSubmit', inputValue );
        if ( inputValue.trim().length >= 1 ) {
            setAnime ( anime => [ inputValue, ...anime ] );
            setImputValue ('');
        }
    }
    // evento para limpiar imput por onclick
    // const clean = (e) => {
    //     e.preventDefault();
    //     setImputValue('')
    // }
    // funcion para agregar una lista en el setAnimes
    // const handleAdd = () => {
    //     setAnimes( animes => [...animes, 'HunterxHunter', 'Madoka Magica', 'Kimetsu'] );
    // }

    return (
        <form onSubmit={ handleSubmit }>
            <p> { inputValue } </p>    
            <h1>Agregando: { inputValue }</h1>
             < input
             type= 'text'
             value={ inputValue }
             onChange={ handleInputChange }
            //  onClick={ clean }
             placeholder='Nuevo Anime... '
             />
             </form>
             )
            }
            
            AddCategory.propTypes = {
                setAnime: PropTypes.func.isRequired
            }
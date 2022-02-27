import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

 

describe('Pruebas en <AddCategory />', () => {

    const setAnime = jest.fn();
    let wrapper = shallow ( <AddCategory setAnime={ setAnime } />); 
    // se puede dejar solo let wrapper; -- pero no manda las ayudas al completar

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow ( <AddCategory setAnime={ setAnime } />); 

    })

    // el before sirve para reinicar una variable y no tenga valor

    test('Debe mostrarse correctamente', () => {
            
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe cambiar la caja de texto', () => {
      
        const input = wrapper.find( 'input' );
        const value = 'Hola Mundo';

        input.simulate( 'change', { target: { value } } );

        expect( wrapper.find( 'p' ).text().trim() ).toBe( value );

    });

    test('No debe de imprimir la informacion con submit', () => {
        
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } )
        
        expect( setAnime ).not.toHaveBeenCalled();
        
    });
    
    test('Debe llamar el setAnime y limpiar la caja de texto o input', () => {
       
        const value = 'Hola Mundo';

        wrapper.find( 'input' ).simulate( 'change', { target: { value } } );
        // simula el evento
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );
        // simula el submit

        expect( setAnime ).toHaveBeenCalled();
        // toHaveBeenCalled sirve para saber si se llamo
        expect( setAnime ).toHaveBeenCalledTimes(1);
        // toHaveBeenCalledTimes sirve para saber cuantas veces fue llamdo
        expect( setAnime ).toHaveBeenCalledWith( expect.any( Function ) );
        // toHaveBeenCalledWith sirve para saber como se mando una const si fue funcion o valor

        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( '' );
        // el imput debe estar vacio

    });
    
    
    
});
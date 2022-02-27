import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas en el <GifGrid />', () => {

    const anime= 'one punch';

    test('Hacer toMatchSnapshot correcatamente del GifGrid', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            loading: true
        });

        const wrapper= shallow( <GifGrid anime={ anime }  /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar los valores cuando se cargan las imagenes useFetchGifs', () => {
        
        const gif= [{
            id: 'ABC',
            url: 'https://local/host.jpg',
            title: 'titulo'
        },
        {
            id: '123',
            url: 'https://local/host.jpg',
            title: 'titulo'
        }]

        useFetchGifs.mockReturnValue({
            images: gif,
            loading: false
        });

        const wrapper= shallow( <GifGrid anime={ anime }  /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gif.length )
    });
    
});
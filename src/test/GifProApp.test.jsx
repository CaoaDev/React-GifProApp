import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifProApp } from '../GifProApp';

describe('Mostrar correctamente GifProApp', () => {
    
    const anime= 'kimetsu';
    const wrapper= shallow( <GifProApp anime={ anime }  /> );

    test('Debe mandar el snapshot correctmanete', () => {
      
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar una lista de anime', () => {
        
        const anime= ['kimetsu', 'naruto'];
        const wrapper= shallow( <GifProApp defaultAnime={ anime }  /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( anime.length );

    });
    

});

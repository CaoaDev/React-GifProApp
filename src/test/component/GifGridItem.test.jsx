import react  from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

  const title = 'Un titulo';
  const url = 'https://Una_Url';
  const wrapper = shallow ( <GifGridItem title= { title } url= { url } /> )

  test('Debe mostrar el componenete correctamente', () => {
      expect ( wrapper ).toMatchSnapshot();
  });

  test('Debe tener un parrafo en el title', () => {
    const p = wrapper.find ( 'p' );
    expect ( p.text().trim() ).toBe ( title ); 
  });

  test('La imagen debe tener de props la url y alt', () => {
     const img = wrapper.find ( 'img' );
     console.log( img.html() );
     console.log( img.props() );
     console.log( img.prop('alt') );
     console.log( img.prop('src') );
     console.log( img.props().alt );
     console.log( img.props().src );
     // diferentes formas de ver las props, si tienes enzyne puedes usar props, si no html
     expect( img.prop( 'src' ) ).toBe ( url );
     expect( img.prop( 'alt' ) ).toBe ( title );
     console.log(img.prop('src'),' es igual a: ',url);
     console.log(img.prop('alt'),' es igual a: ',title);
     
  });

  test('Debe de tener animate__bounceOut', () => {
    const div = wrapper.find('div');
    console.log( div.prop('className'));
    // con el console log podemos ver las props de la const
    const className = div.prop('className');
    expect ( className.includes( 'animate__bounceOut' ) ).toBe(true);
    expect ( className.includes( 'animate__bounceOut' ) ).not.toBe(false);

  });
  
})
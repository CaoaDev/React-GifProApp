import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {
    const anime= 'kimetsu';
    
    test('Debe de retornar el estado inicial sin datos', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( '##' ));
        
        await waitForNextUpdate();

        const { images, loading } = result.current;
        
        expect( images ).toEqual([]);
        expect( loading ).toBe( false );
        expect( loading ).toBeFalsy();
    });

   test('Debe de retornar el estado con datos', async () => {
       const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( anime ));
    
       await waitForNextUpdate();
    
       const { images, loading } = result.current;

       expect( images.length ).toBe(6);
       expect( images.length ).toEqual(6);
       expect( loading ).toBe( false );
   });
})
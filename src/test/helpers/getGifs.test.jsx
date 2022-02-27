import { getGifs } from "../../helpers/getGifs";


describe('Pruebas en getGifs con Fecth', () => {
    test('Debe traer 6 elementos', async() => {
        const gif = await getGifs('kimetsu');
        expect ( gif.length ).toBe(6);
    });

    test('Debe traer 0 elementos', async() => {
        const gif = await getGifs('');
        expect ( gif.length ).toBe(0);
    });
    

});

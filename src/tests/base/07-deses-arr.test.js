import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en desestructuración', () => {
    
    test('debe de retornar un string y un número', () => {
        
        const [letras, numeros] = retornaArreglo(); // ['ABC', 123]

        // expect(arr).toEqual(['ABC', 123]);

        // INFORMACIÓN Retorna el tipo
        // console.log(typeof letras);

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    })

})

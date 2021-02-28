import '@testing-library/jest-dom'; // Importa los métodos del entorno de pruebas
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe de retornar Hola Francisco!', () => {
        
        const nombre = 'Francisco';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');

    });

    // getSaludo debe de retornar Hola Carlos! si no hay argumente nombre
    test('getSaludo debe de retornar Hola Carlos! si no tiene argumento', () => {
        
        const nombre = 'Carlos';

        const saludo = getSaludo();

        expect(saludo).toBe('Hola ' + nombre + '!');

    });
    
})

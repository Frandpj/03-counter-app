import '@testing-library/jest-dom';

const { getUser } = require("../../base/05-funciones")
const { getUsuarioActivo } = require("../../base/05-funciones")

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objecto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );

    });

    // Tarea
    test('getUsuarioActivo debe de retornar un objecto', () => {
        
        const nombre = 'Francisco';
        const user = getUsuarioActivo( nombre );

        // Se puede meter un objeto directamente como parámetro
        expect( user ).toEqual({
            uid: 'ABC567',
            username: nombre
        });

    });
    
})

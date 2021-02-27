// Describe la prueba o el archivo de la prueba o lo que quedamos
describe('Pruebas en el archivo demp.test.js', () => {
    
    test('debe de ser iguales los string', () => {
        
        //1. Inicialización
        const mensaje = 'Hola Mundo';
    
        // 2. Estímulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2); // === Compara el tipo y el mensaje para ver si son iguales
    
    })

})




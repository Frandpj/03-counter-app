import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
    
    test('Debe de mostrar el mensaje "Hola soy Francisco"', () => {
   
        const saludo = 'Hola soy Francisco';

        // Desestructuración
        const {getByText} = render(<PrimeraApp saludo = {saludo}/>)

        expect(getByText(saludo)).toBeInTheDocument();

    });
    

});

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import CounterApp from "../CounterApp";

describe('Pruebas de <CounterApp />', () => {

    // Variable global para todo lo de el método describe por debajo
    let wrapper = shallow(<CounterApp />); // No se pierden las ayudas
    
    // Función que se ejecuta antes de cada test
    beforeEach(() => {

        wrapper = shallow(<CounterApp />);

    });
    
    test('Debe de mostrar <CounterApp /> correctamente', () => {
   
        // Crea un snapshot de lo que enviamos, en este caso el componente completo
        // <CounterApp />
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow(<CounterApp value = {100} />);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');

    });

    test('Debe de incrementar con el botón +1', () => {
       
        // 'at' Busca los botones y coge el primero que encuentre
        // 'simulate' Simula un click en el botón
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
        // INFORMACIÓN Muestra el html del botón
        // console.log(btn1.html());

    });

    test('Debe de decrementar con el botón -1', () => {
       
        // 'at' Busca los botones y coge el primero que encuentre
        // 'simulate' Simula un click en el botón
        const btn3 = wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');

    });
    
    test('Debe de colocar el valor por defecto con el botón Reset', () => {
       
        const wrapper = shallow(<CounterApp value = {105} />);

        // 'at' Busca los botones y coge el primero que encuentre
        // 'simulate' Simula un click en el botón
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const btn2 = wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');

    });

});

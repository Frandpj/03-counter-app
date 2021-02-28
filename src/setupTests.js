// import '@testing-library/jest-dom/extend-expect';
// Funciones de pruebas para crear snapshot
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Crea un snapshot más familiar
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

import { render, screen, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import Form1 from '../components/Form1'

describe('Form Component', () => {

    let form1;
    let button;
    let nameInput;
    let licenseInput;
    let emailInput;
    let selectGeo;
    let selectUnit;
    beforeEach(() => {
        render(<Form1 />);
        
        form1 = screen.getByRole('form')
        button = screen.getByRole('button', { name: 'Crear Geocerca' })
        nameInput = screen.getByRole('textbox', { name: 'nombreUnidad' })
        licenseInput = screen.getByRole('textbox', { name: 'licenciaChofer' })
        emailInput = screen.getByRole('textbox', { name: 'emailChofer' })
        selectGeo= screen.getByRole('combobox', { name: 'geocerca' })
        selectUnit= screen.getByRole('combobox', { name: 'unidades' })
    })

    test('Renderiza el componente Form correctamente', () => {
        expect(form1).toBeInTheDocument()
    })
    test('Renderiza el button, los select y los input correctamente', () => {
      expect(button).toBeInTheDocument()
        expect(nameInput).toBeInTheDocument();
         expect(licenseInput).toBeInTheDocument();
         expect(emailInput).toBeInTheDocument();
    })

    test('El botón se habilita cuando se llena solo el campo obligatorio',  () => {
        fireEvent.change(selectGeo, { target: { value: 'Monterrey' } });
        fireEvent.change(selectUnit, { target: { value: 'Base 1525' } });
        fireEvent.change(nameInput, { target: { value: 'Unidad 1' } });
        fireEvent.change(licenseInput, { target: { value: '1234567' } });
        fireEvent.change(emailInput, { target: { value: 'abcd@gmail.com' } });

        user.click(button)

    });

})
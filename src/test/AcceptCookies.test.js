import { render, screen, fireEvent} from '@testing-library/react'
import AcceptCookies from '../components/AcceptCookies'

describe('AcceptCookies Component',()=>{
     
    let checkbox
    let article
    beforeEach(()=>{
       render(<AcceptCookies/>);
       checkbox=screen.getByLabelText('Acepta las cookies');
       article=screen.getByRole('article', {name:'confirmacion de cookies'});
    })

    test('checkbox esta en el componente y desactivado',()=>{
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

    })

    test('al pulsar el checkbox cambia el texto',()=>{
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(article.textContent).toBe('Cookies aceptadas');

    })
})
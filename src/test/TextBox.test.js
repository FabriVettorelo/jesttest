import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent} from '@testing-library/react'
import TextBox from "../components/TextBox";

describe('TextBox component',()=>{

    let article;
    let button
    beforeEach(()=>{
        render(<TextBox/>);
        article= screen.getByRole('article',{name:"párrafo principal"});
        button= screen.getByRole('button',{name:"pulsa para modificar"})
    })
    
    test('la caja de texto se encuentra en el documento', ()=>{       
        expect(article).toBeInTheDocument();
    });
    test('la caja de texto tiene color inicial', ()=>{
        expect(article).toHaveStyle({
            backgroundColor:"cyan"
        });
    });
    test('el boton cambia el color de fondo al pulsarlo', ()=>{
        fireEvent.click(button);
        expect(article).toHaveStyle({
            backgroundColor:"blue"
        });
    });
    
})
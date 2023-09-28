import React from "react";
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'
import { render, screen, fireEvent} from '@testing-library/react'
import UserForm from "../components/UserForm";

describe("UserForm Component",()=>{

    test('UserForm presenta 2 inputs y 1 boton',()=>{
        render(<UserForm/>);
        const inputs= screen.getAllByRole('textbox');
        const button= screen.getByRole('button');

        expect(inputs).toHaveLength(2);
        expect(button).toBeInTheDocument;
    })
    test('Al presionar el boton llama a onUserAdd y se realiza el submit',()=>{

        const mock = jest.fn()

        render(<UserForm onUserAdd={mock}/>);

        const nameInput= screen.getByRole('textbox',{name:/name/i});
        const emailInput= screen.getByRole('textbox',{name:/email/i});
        user.click(nameInput)
        user.keyboard('jane')

        user.click(emailInput)
        user.keyboard('jane@jane')

        const button= screen.getByRole('button');
        user.click(button)

        expect(mock).toHaveBeenCalled()
        expect(mock).toHaveBeenCalledWith({name:'jane',email:'jane@jane'});

    })
    test('Al enviar los datos los input se vacian',async ()=>{
        render(<UserForm onUserAdd={()=>{}}/>);

        const nameInput= screen.getByRole('textbox',{name:/name/i});
        const emailInput= screen.getByRole('textbox',{name:/email/i});
        const button= screen.getByRole('button');

        user.click(nameInput)
        user.keyboard('jane')
        user.click(emailInput)
        user.keyboard('jane@jane')

        await user.click(button)

        expect(nameInput).toHaveValue('');
        expect(emailInput).toHaveValue('');

    })

})
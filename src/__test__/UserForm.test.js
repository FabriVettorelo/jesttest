import React from "react";
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/user-event'
import { render, screen, fireEvent} from '@testing-library/react'
import UserForm from "../components/UserForm";

describe("UserForm Component",()=>{

    test('UserForm presenta 2 inputs y 1 boton',()=>{
        render(<UserForm/>)
        const inputs= screen.getAllByRole('textbox');
        const button= screen.getByRole('button');

        expect(inputs).toHaveLength(2);
        expect(button).toBeInTheDocument;
    })

})
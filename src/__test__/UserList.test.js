import React from "react";
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'
import { render, screen, fireEvent, within} from '@testing-library/react'
import UserList from "../components/UserList";

describe("UserForm Component",()=>{

    test('Renderizar una fila por usuario',()=>{
        const users = [{name:'fabri',email:'fabri@fabri'},{name:'sofi',email:'sofi@sofi'}];
        render(<UserList users={users}/>);    
        
        const rows = within(screen.getByTestId('users')).getAllByRole('row')
        expect(rows).toHaveLength(2)
       
    })
    test('Renderizar el email y nombre de cada usuario',()=>{

    })
})

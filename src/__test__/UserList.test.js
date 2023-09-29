import React from "react";
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'
import { render, screen, fireEvent, within} from '@testing-library/react'
import UserList from "../components/UserList";
import { act } from "react-dom/test-utils";

describe("UserForm Component",()=>{

    function renderComponent(){
        const users = [{name:'fabri',email:'fabri@fabri'},{name:'sofi',email:'sofi@sofi'}];
        render(<UserList users={users}/>);
        return {users};
    }
    test('Renderizar una fila por usuario',()=>{
        
       renderComponent(); 
     //const {container} = render(<UserList users={users}/>);    
    //const rows = container.querySelectorAll('tbody tr')
    act(()=>{
        const rows = within(screen.getByTestId('users')).getAllByRole('row')
        expect(rows).toHaveLength(2) 
    })
            
    })
    test('Renderizar el email y nombre de cada usuario',()=>{
        const {users} = renderComponent();
         
        for (let user of users) {
            const name= screen.getByRole('cell',{name:user.name});
            const email = screen.getByRole('cell',{name:user.email});
            expect(name).toBeInTheDocument();
            expect(email).toBeInTheDocument();
            
        }
    })
})

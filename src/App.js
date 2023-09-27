import UserForm from "./components/UserForm"
import { useState } from "react";
import UserList from "./components/UserList";

function App() {

  const [users, setUsers]=useState([]);

  const onUserAdd= (user)=>{
    setUsers([...users,user]);
    console.log(users)
  }

  return (
    <div>
      <h1>APP FOR TESTING PRACTICE</h1>
      <UserForm onUserAdd={onUserAdd}/>
      <hr/>
      <UserList users={users}/>
    </div>
  );
}

export default App;

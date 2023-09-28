import UserForm from "./components/UserForm"
import { useState } from "react";
import UserList from "./components/UserList";

function App() {

  const [users, setUsers]=useState([]);

  const onUserAdd= (user)=>{
    setUsers([...users,user]);
  }

  return (
    <div>
      <h1>APP FOR TESTING PRACTICE</h1>
      <hr/>
      <UserForm onUserAdd={onUserAdd}/>
      <hr/>
      <UserList users={users}/>
    </div>
  );
}

export default App;

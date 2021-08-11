import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const INITIAL_USERS = [
  { name: "Max", age: 27, id: 'u1' },
  { name: "Alice", age: 25, id: 'u2' },
];

function App() {
  const [users, setUsers] = useState(INITIAL_USERS);

  const pushNewUser = (name, age) => {
    setUsers((prevUsers) => [{name, age, id: Math.random().toString()}, ...prevUsers]);
  };

  return (
    <div>
      <AddUser addUser={pushNewUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;

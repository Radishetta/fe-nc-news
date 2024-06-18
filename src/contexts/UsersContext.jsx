import { createContext } from "react";
import { useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState("");

  return (
    <UsersContext.Provider value={{ users, setUsers, loggedUser, setLoggedUser }}>
      {children}
    </UsersContext.Provider>
  );
};

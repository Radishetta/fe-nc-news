import { useContext, useEffect } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { getUsers } from "../../utils/api";

const Users = () => {
  const { users, setUsers } = useContext(UsersContext);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);
};

export default Users;

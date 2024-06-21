import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UsersContext } from "../../contexts/UsersContext";
import { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { users, loggedUser, setLoggedUser } = useContext(UsersContext);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUserOptions = (e) => {
    handleClose();
    setLoggedUser(e.target.innerText);
  };

  const handleLogout = () => {
    handleClose();
    setLoggedUser("");
  };

  if (loggedUser) {
    return (
      <>
        <Button
          color="inherit"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <PersonIcon /> <p>{loggedUser}</p>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </>
    );
  } else {
    return (
      <>
        <Button
          color="inherit"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Login
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {users.map((user) => (
            <MenuItem onClick={handleUserOptions} value={user.username} key={user.username}>
              {user.username}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }
}

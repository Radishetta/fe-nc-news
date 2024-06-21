import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TodayDate from "../TodayDate/TodayDate";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";

const ButtonAppBar = ({ topics }) => {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleHomeButton = () => {
    navigate("/articles");
  };

  const handleTopicsButton = (e) => {
    navigate(`/articles/${e.target.innerText}`);
  };

  const DrawerList = (
    <Box sx={{ width: 115 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key="Home" disablePadding>
          <ListItemButton onClick={handleHomeButton}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" />
        {topics.map((topic) => (
          <ListItem key={topic.slug} disablePadding>
            <ListItemButton onClick={handleTopicsButton}>
              <ListItemText primary={topic.slug} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  {
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="static">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            NC NEWS
          </Typography>
          <LoginButton />
        </Toolbar>
        <TodayDate />
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;

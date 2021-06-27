import React, { useState } from "react";
import useStyles from './styles'

import MenuIcon from "@material-ui/icons/Menu";
import LockIcon from "@material-ui/icons/Lock";
import { Button, Avatar, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, ListItemAvatar } from '@material-ui/core';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { initialFormData } from '../../redux/ducks/form';
import { logOut } from '../../redux/ducks/auth';


const Phone = ({user, setUser}) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const [right, setRight] = useState(false);
    const anchor = "right";

    const toggleDrawer = (anchor, open) => (event) => {
    setRight({ [anchor]: open });
    };

    const handlePost = () =>{
    dispatch(initialFormData())
    history.push("/form")
    }

    const handleLogin = () =>{
        history.push("/auth")
    }

    const handleLogout = () => {
      dispatch(logOut())
      history.push("/auth")
      setUser(null)
    }
    const list = (anchor) => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
        { user ? (
          <>
          <List>
            <ListItem>
            <ListItemAvatar>
                <Avatar 
                className={classes.avatar}
                src={user.result.imageUrl} 
                alt={user.result.name}>
                {user.result.name.charAt(0).toUpperCase()}
                </Avatar>
            </ListItemAvatar>
            <ListItemText>{user.result.name}</ListItemText>
            <Button
            className={classes.logout}
            color="secondary"
            variant="contained"
            size='small'
            onClick={handleLogout}>
            logout
            </Button>
            </ListItem>
        </List>
          <Divider />
          <List onClick={handlePost}>
            <ListItem button>
              <ListItemIcon>
              <AddCircleIcon />
              </ListItemIcon>
              <ListItemText>Create post</ListItemText>
            </ListItem>
          </List>
          </>
          ) : (
            <List onClick={handleLogin}>
              <ListItem button>
              <ListItemIcon>
                  <LockIcon />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
              </ListItem>
            </List>
          )}
        </div>
      );
    
      return (
        
          <div className={classes.sectionMobile}>
            <Button style={{ color: "white" }} onClick={toggleDrawer(anchor, true)}>
              <MenuIcon fontSize='large'/>
            </Button>
            <Drawer
              anchor={anchor}
              open={right[anchor]}
              onClose={toggleDrawer(anchor, false)}
              
            >
              {list(anchor)}
            </Drawer>
          </div>
      );
};

export default Phone;

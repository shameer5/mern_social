import React from 'react'
import {Button, Avatar,Typography } from '@material-ui/core'
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logOut } from '../../redux/ducks/auth';
import { initialFormData } from '../../redux/ducks/form';


const Desktop = ({user, setUser}) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const handlePost = () =>{
        dispatch(initialFormData())
        history.push("/form")
    }

    const handleLogin = () =>{
        dispatch(initialFormData())
        history.push("/auth")
    }

    const handleLogout = () => {
      dispatch(logOut())
      history.push("/auth")
      setUser(null)
    }

  return (
          <div className={classes.sectionDesktop}>
          {user ? (
                <div className={classes.profile}>
                  <span className={classes.spaces}>
                    <Avatar 
                    className={classes.avatar}
                    src={user.result.imageUrl} 
                    alt={user.result.name}>
                    {user.result.name.charAt(0).toUpperCase()}
                    </Avatar>
                  </span>
                  <span className={classes.spaces}>
                    <Typography 
                    className={classes.userName}
                    variant='h6' style={{ color: 'white' }}>
                    {user.result.name}
                    </Typography>
                  </span>
                  <span className={classes.spaces}>
                    <Button
                    color='primary'
                    className={classes.createPostButton}
                    variant="contained"
                    onClick={handlePost}>
                    Create post
                    </Button>
                  </span>
                  <span className={classes.spaces}>
                    <Button
                    className={classes.logout}
                    color="secondary"
                    variant="contained"
                    onClick={handleLogout}>
                    logout
                    </Button>
                  </span>
                </div>
              ) : (
                <Button
                className={classes.createPostButton}
                color='primary'
                variant="contained"
                onClick={handleLogin}>
                Login
                </Button>
              )}
          </div>
  );
}

export default Desktop;

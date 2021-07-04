import React, {useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'
import Desktop from './Desktop'
import Phone from './Phone'
import decode from 'jwt-decode'
import { logOut } from '../../redux/ducks/auth';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom'


const Navbar = () => {

    let history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    let location = useLocation();
    
    const handleLogout = () => {
      dispatch(logOut())
      history.push("/auth")
      setUser(null)
    }

    useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000< new Date().getTime()) 
        {
          console.log('_______CHECKING HERE_______')
          dispatch(logOut())
          history.push("/auth")
          setUser(null)
        }
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location,dispatch,history,user?.token]);

    return(
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h3" className={classes.title}>
            NoteBook</Typography>
            <div className={classes.sectionDesktop}>
              <Desktop user={user} setUser={setUser} />
            </div>
            <div className={classes.sectionMobile}>
              <Phone user={user} setUser={setUser} />
            </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Navbar
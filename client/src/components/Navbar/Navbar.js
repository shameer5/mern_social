import React, {useState} from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'
import Desktop from './Desktop'
import Phone from './Phone'

const Navbar = () => {

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

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
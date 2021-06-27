import React, { useState } from 'react'
import {GoogleLogin} from 'react-google-login';
import {Avatar, Grid, Typography, Button, Paper, Grow} from '@material-ui/core'
import Icon from './icon';
import FileBase from 'react-file-base64';
import useStyles from './styles'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useHistory } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { useDispatch } from 'react-redux'
import { takeAUTH } from '../../redux/ducks/auth'
import { register, logIn } from '../../redux/ducks/auth'


const Auth = () => {
    const classes = useStyles();
    const [isExist , setIsExist] = useState(false)
    const [passwordShow, setPasswordShow] = useState(false)
    const [loginData, setLoginData] = useState({firstName: '', lastName: '', email: '', password: ''});
    const dispatch = useDispatch();
    let history = useHistory();

    const handleBack = () => {
        history.push("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isExist) {
            dispatch(register(loginData, history))
        } else {
            dispatch(logIn(loginData, history))
        }
    }
    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleVisiblePassword = () => {
        setPasswordShow(!passwordShow)
    }

    const switchType = () => {
        setIsExist(!isExist)
    }

    const successGoogle = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
           try {
            dispatch(takeAUTH(result, token));
            history.push("/");
        } catch (error) {
            console.log(error)
        }
    }
    const failureGoogle = (error) => {
        console.log(error)
        console.log("Failure of Google SignIn")
    }

    return (
        <>
        <Button onClick={handleBack}>
            <ArrowBackIosRoundedIcon fontSize='large' />
            return
        </Button>
        <div className={classes.main}>
        <Grow in>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography varaint='h5' className={classes.heading}>{isExist ? 'Register' : 'Login'}</Typography>
                    <Grid container spacing={2}>
                        {isExist && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus halfWidth/>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} halfWidth/>
                            </>
                        )}
                        <Input name='email' label="Email" handleChange={handleChange} type='email' />
                        <Input name='password' label="Password" handleChange={handleChange} type={passwordShow ? 'text' : 'password'} handleVisiblePassword={handleVisiblePassword} />
                        
                        {isExist && (
                            <>
                                <Input name='confirmPassword' label="Confirm Password" handleChange={handleChange} type='password' />
                            </>
                        )}
                        </Grid>

                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.button}
                        style={{marginTop: '0.5rem'}}>
                            {isExist ? 'Register' : 'Login'}
                        </Button>

                        <GoogleLogin 
                            clientId='502919897482-buvhcnpqhtkb6ds0464r343n72otooak.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <Button
                                color='primary' 
                                onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}
                                fullWidth
                                variant='contained'
                                style={{marginTop: '0.5rem'}}>
                                {isExist ? 'Google register' : 'Google Login'}</Button>
                            )}
                            onSuccess={successGoogle}
                            onFailure={failureGoogle}
                            cookiePolicy='single_host_origin'
                        />
                        <Grid container justify="center">
                            <Grid xs={12} item>
                                <Typography variant='body2' style={{textAlign: 'center', marginTop:'0.5rem'}}>
                                {isExist ? 'Already have an account?' : `Don't have an account?`}
                                </Typography>
                                <Button onClick={switchType} variant='contained' color='secondary' fullWidth>
                                    {isExist ? 'Login' : `Register`}
                                </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grow>
        </div>
        </>
    )
}

export default Auth

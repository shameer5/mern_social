import React from 'react'
import {Grid, TextField, InputAdornment, IconButton} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



const Input = ({halfWidth, name, handleChange, label, autoFocus, type, handleVisiblePassword}) => {
    return (
        <Grid item xs={12} sm={halfWidth ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant='outlined'
                fullWidth
                required
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleVisiblePassword}>
                                {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null }
            />
        </Grid>
    );
}

export default Input

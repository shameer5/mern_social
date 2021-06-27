import React, { useState } from 'react'
import {TextField, Typography, Button, Paper, Grow} from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../redux/ducks/posts';
import useStyles from './styles'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { initialFormData } from '../../redux/ducks/form';


const Form = () => {
    const dispatch = useDispatch();
    const user = JSON.parse(window.localStorage.getItem('profile'))
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost({...formData, name: user?.result?.name}));
        history.push("/");
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        dispatch(updatePost(postData._id , {...formData, name: user?.result?.name}));
        history.push("/");
    }

    const clear = () => {
        dispatch(initialFormData())
    }

    let history = useHistory();
    const handleBack = () => {
        history.push("/");
    }
    
    const postData = useSelector(state => state.postData.postData)
    const classes = useStyles();
    const [formData, setFormData] = useState({
        title: postData.title,
        message: postData.message,
        tags: postData.tags,
        selectedFile: postData.selectedFile
    })
    return (<>
        <Button onClick={handleBack}>
            <ArrowBackIosRoundedIcon fontSize='large' />
            return
        </Button>
        <div className={classes.main}>
        <Grow in>
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.formContainer}`} 
                autoComplete="off" noValidate onSubmit={!postData._id ? handleSubmit : handleUpdate}>
                <Typography className={classes.heading} variant="h5">{postData._id ? 'Update Your Experience' : 'Your Experience'}</Typography>

                <TextField name="title" 
                variant="outlined"
                label="title" 
                fullWidth
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value }) }
                ></TextField>

                <TextField name="message" 
                variant="outlined"
                label="message" 
                fullWidth
                multiline
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value }) }

                ></TextField>

                <TextField name="tags" 
                variant="outlined"
                label="tags" 
                helperText="comma seperated"
                fullWidth
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',') }) }
                ></TextField>
                <div className={classes.picture}>
                    {/* This allows to upload our image */}
                    <FileBase
                    type="image"
                    multiple={false}
                    onDone={({ base64 }) => setFormData({ ...formData, selectedFile: base64 })}
                     />
                </div>

                <Button className={classes.submitButton}
                variant="contained" 
                color="primary"
                size="large"
                type="submit"
                fullWidth>Submit</Button>

                <Button variant="contained" 
                color="secondary"
                size="small"
                onClick={clear}
                fullWidth>Clear</Button>
            </form>
        </Paper>
        </Grow>
        </div>
        </>
    )
}

export default Form

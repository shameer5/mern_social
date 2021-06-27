import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Avatar, Typography, IconButton,CardHeader } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import moment from 'moment';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { formData } from '../../../redux/ducks/form';

import useStyles from './styles'
import { deletePost, updateLikeCount } from '../../../redux/ducks/posts';

const Post = ({post}) => {
    const classes = useStyles();
    let history  = useHistory();
    const dispatch = useDispatch();
    const user = JSON.parse(window.localStorage.getItem('profile'));

    const handleEdit = () => {
        dispatch(formData(post));
        history.push('/form')
    }

    const Liking = () => {
        if(post.likes.length>0){
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? ( 
            <>
                <FavoriteIcon style={{ color: 'white' }} />
                <Typography className={classes.likeCount}>

                {`Liked by You ${(post.likes.length - 1) === 1 ? 'and' : ''} ${(post.likes.length - 1) === 1 ? (post.likes.length > 2 ? `${post.likes.length -1} others` : `${post.likes.length -1} other`) : ''}`}
                </Typography>
            </>
            ) : 
            (
            <>
                <FavoriteBorderIcon style={{ color: 'white' }} />
                <Typography className={classes.likeCount}>
                {`Liked by ${post.likes.length} ${post.likes.length === 1 ? 'other' : 'others'}`}
                </Typography>
            </>
            )
        }
        return (
            <>
                <FavoriteBorderIcon style={{ color: 'white' }} />
            </>
        )
    }
    
    return (
        <Card className={classes.card}>

            <CardHeader
            avatar={
                <Avatar className={classes.avatar}>{post.name.charAt(0).toUpperCase()}</Avatar>
            }
            title={
            <Typography variant='h6' style={{ color: 'white' }}>
            {post.name}</Typography>}
            subheader={
            <Typography variant='body2' style={{ color: 'white' }}>
            {moment(post.createdAt).fromNow()}</Typography>}
            />

           <CardMedia className={classes.picture} 
           component="img"
           image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
           title={post.title}
           />
           
           <div className={classes.subContent}>
           {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <IconButton style={{ color: 'white' }} size='small'
                onClick={handleEdit}>
                    <EditIcon fontSize='default' />
                </IconButton>)}
           </div>
           <div className={classes.tags}>
            <Typography variant='body2' >
            {post.tags.map((tag)=> `#${tag} `)}
            </Typography> 
           </div>
           <Typography className={classes.title} 
           variant='h5' component="h2">
           {post.title}
           </Typography>
           <CardContent>
            <Typography variant="body2" 
            color="textSecondary" 
            component="p" style={{ color: 'white' }}>{post.message}</Typography>
           </CardContent>
           <CardActions className={classes.interact}>
               <IconButton size='small' disabled={!user?.result} onClick={() =>{
                   dispatch(updateLikeCount(post._id)); 
                   }}>
                    <Liking />
               </IconButton>
               {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <IconButton size='small' onClick={() =>{dispatch(deletePost(post._id))}}>
                    <DeleteIcon style={{ color: 'white' }} />
                    </IconButton>)}
           </CardActions>
        </Card>
    )
}

export default Post

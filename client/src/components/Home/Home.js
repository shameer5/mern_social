import React, { useEffect } from 'react';
import {Container, Grow} from '@material-ui/core'
import Posts from '../Posts/Posts';
import useStyles from './styles'
import Navbar from '../Navbar/Navbar';


import { getPosts } from "../../redux/ducks/posts";
import { useDispatch } from 'react-redux';

export const Home = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <>
        <Container className={classes.mainContainer}
         maxWidth='xl'>
        <Navbar />
            <Grow in>
                <Container className={classes.postContainer} justify="space-between"  spacing={3}>
                    <Posts />
                </Container>
            </Grow>
        </Container>
        </>
    )
}

export default Home;

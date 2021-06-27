import { CircularProgress} from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles'
import Masonry from 'react-masonry-css'

const Posts = () => {
    const posts = useSelector((state) => state.posts.posts);
    const classes = useStyles();
    const breakpoints= {
        default: 3,
        1000: 2,
        600: 1
    }
    return (
      <>
           { !posts.length ? (
               <div className={classes.loading}>
                <CircularProgress size={80} />
               </div>) : (
            <Masonry
                breakpointCols={breakpoints}
                className={classes.myMasonryGrid}
                columnClassName={classes.myMasonryGridColumn}>
                {posts.map((post) => (
                    <div className={classes.masonryDiv} key={post._id}>
                        <Post post={post}/>
                    </div>
                ))}
            </Masonry>
            )}
    </>
    )
}

export default Posts

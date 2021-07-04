import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost, commentPost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

/*this will be reached on localhost:5000/posts
because we added prefix to all the routes in this from the index.js file*/
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);


export default router;
import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
        
        console.log("Getting posts...");
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    /* We have the access to req body with details inputed in put function from the frontend form */
    /* .toISOString -> to make sure its shows date when the post was created */
    const post = req.body;
    const newPostMessage = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()})
    try {
        console.log("creating posts...");
        await newPostMessage.save();
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = async (req,res) =>{
    const{ id: _id } = req.params;
    const post = req.body;

    /* checking if the reqested id exist in DB */
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.send(404).send('Requested Post to update does not exist');
    
    console.log("Updating posts...");
    /* 3rd @param {new:true} - has to be set so that we can get the updated post  */
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const{id: _id} = req.params;
    /* checking if the reqested id exist in DB */
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.send(404).send('Requested Post to delete does not exist');
    
    console.log("Deleting posts...");
    await PostMessage.findByIdAndRemove(_id);
    res.json({message: 'The post has been deleted successfully'});
}

export const likePost = async (req,res) => {
    const{id: _id} = req.params;

    if(!req.userId) 
            return res.json({message: "not Athunticated"})
     /* checking if the reqested id exist in DB */
     if(!mongoose.Types.ObjectId.isValid(_id))
        return res.send(404).send('Requested Post to like does not exist');
    console.log("Liking posts...");
    const post  = await PostMessage.findById(_id);

    const index = post.likes.findIndex((_id) => _id === String(req.userId));
    if( index=== -1 ) {
        console.log("increment like count...")
        post.likes.push(req.userId);
    } else {
        console.log("decrement like count...")
        post.likes = post.likes.filter((_id) => _id!== String(req.userId))
    }
    const updatedPost  = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
    res.json(updatedPost)
}
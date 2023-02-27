const express = require('express')
const router = express.Router();
const Post = require("../models/Post");

router.get('/',async (req,res)=>{
  try{
    const post = await Post.find();
    res.json(post);
  }
  catch(err){
      res.json({messages:err})
  }
})

router.post("/", async (req,res)=>{
    const post = new Post({
      title:req.body.title,
      description:req.body.description
    });
    try{
      const savedPost = await post.save()
      res.json(savedPost)
    }
    catch(err)
    {
    res.json({messages:err})
    }
})

//SPECIFIC POST
router.get('/:postId',async (req,res)=>{
  try{
   const post = await Post.findById(req.params.postId)
   res.json(post)
  }
  catch(err){
    res.json({messages:err})
  }
})

//Delete Post
router.delete('/:postId', async (req,res)=>{
  try{
    const remove = await Post.deleteOne({_id:req.params.postId})
    res.json(remove);
  }
  catch(err){
    res.json({messages:err})
  }
})

//UPDATE POST
router.patch('/:postId', async (req,res)=> {
  const updateData = {
    title:req.body.title
  }
  try{
    const updatePost = await Post.updateOne({_id:req.params.postId}, {$set:updateData})
    res.json(updatePost);
  }
  catch(err){
    res.json({messages:err})
  }
})

module.exports = router;
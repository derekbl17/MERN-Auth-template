const asyncHandler=require('express-async-handler')

const getPosts=asyncHandler(async(req,res)=>{
    res.status(200).json({method:'Get'})
})

const postPosts=asyncHandler(async(req,res)=>{
    if (!req.body){
        res.status(400)
        throw new Error('Request body cant be empty')
    }
    console.log(req.body)
    res.status(200).json({method:'Post'})
})
// put => overwrite whole existing target. Patch only changes specific values of target
const putPost=asyncHandler(async(req,res)=>{
    res.status(200).json({method:'Put',target:`${req.params.id}`})
})

const deletePost=asyncHandler(async(req,res)=>{
    res.status(200).json({method:'Delete',target:`${req.params.id}`})
})

module.exports={getPosts,postPosts,putPost,deletePost}
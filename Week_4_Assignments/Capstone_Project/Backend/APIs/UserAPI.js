import exp from 'express';
import { verifyToken } from '../middlewares/verifyToken.js'
import {ArticleModel} from '../models/ArticleModel.js'
export const userApp = exp.Router();

//Read articles of all authors
userApp.get("/articles",  verifyToken("USER"), async(req, res)=>{
    //read articles
    const articlesList = await ArticleModel.find({isArticleActive:true})
    //send res
    res.status(200).json({message:"articles", payload:articlesList})
})

//Add comment to an article
userApp.put("/articles", verifyToken("USER"), async(req, res)=>{
    //get body from req
    const {articleId, comment} = req.body
    //check article
    const articleDoc=await ArticleModel.findOne({_id:articleId, isArticleActive:true})
    //if article not found
    if(!articleDoc){
        return res.status().json({message:"Article not found"})
    }
    //get user id
    const userId=req.user?.id;
    //add comment to comments array of article document
    articleDoc.comments.push({user:userId, comment:comment})
    //save
    await articleDoc.save()
    //send res
    res.status(200).json({message:"comment added successfully", payload:articleDoc})
});
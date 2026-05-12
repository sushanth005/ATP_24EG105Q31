import exp from "express";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { ArticleModel } from "../models/ArticleModel.js";

export const userApp = exp.Router();

// Read Articles of all authors
userApp.get(
  "/articles",
  verifyToken("USER"),
  async (req, res) => {
    try {
      // read articles
      const articlesList = await ArticleModel.find({
        isArticleActive: true,
      }).populate("comments.user");

      // send response
      res.status(200).json({
        message: "All Articles",
        payload: articlesList,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error fetching articles",
        error: err.message,
      });
    }
  }
);

// Add comment to an article
userApp.put(
  "/article",
  verifyToken("USER"),
  async (req, res) => {
    try {
      // get body from request
      const { articleId, comment } = req.body;

      // check article
      const articleDocument = await ArticleModel.findOne({
        _id: articleId,
        isArticleActive: true,
      }).populate("comments.user");

      // if article not found
      if (!articleDocument) {
        return res.status(404).json({
          message: "Article not found",
        });
      }

      // get user id from token
      const userIdOfToken = req.user?.id;

      // add comment
      articleDocument.comments.push({
        user: userIdOfToken,
        comment: comment,
      });

      // save article
      await articleDocument.save();

      // get updated article
      const updatedArticle = await ArticleModel.findById(
        articleId
      ).populate("comments.user");

      // send response
      res.status(200).json({
        message: "Comment added successfully",
        payload: updatedArticle,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error adding comment",
        error: err.message,
      });
    }
  }
);

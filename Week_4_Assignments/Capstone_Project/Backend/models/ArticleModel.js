import { Schema, model, Types } from "mongoose";

const commentSchema = new Schema({
  user:{
    type:Types.ObjectId,
    ref:"user",
    required:[true, "User id required"]
  },
  comment:{
    type:String,
    required:[true, "Give a comment"]
  }
});

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    content: {
      type: String,
      required: true
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true
    },

    isArticleActive: {
      type: Boolean,
      default: true
    },
    comments:[{type:commentSchema, default:[]}],
    isArticleActive:{
      type:Boolean,
      default:true
    }
  },
  {
    timestamps: true,
    versionKey: false,
    strict:"throw"
  }
);

export const ArticleModel = model("article", articleSchema);
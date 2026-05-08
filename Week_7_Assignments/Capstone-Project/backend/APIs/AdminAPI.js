# adminAPI.js

```js
import exp from "express";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { UserModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";

export const adminApp = exp.Router();

// ==========================
// GET ALL USERS
// ==========================
adminApp.get(
  "/users",
  verifyToken(["ADMIN"]),
  async (req, res, next) => {
    try {
      const users = await UserModel.find().select("-password");

      res.status(200).json({
        message: "Users fetched successfully",
        payload: users,
      });
    } catch (err) {
      next(err);
    }
  }
);

// ==========================
// GET ALL ARTICLES
// ==========================
adminApp.get(
  "/articles",
  verifyToken(["ADMIN"]),
  async (req, res, next) => {
    try {
      const articles = await ArticleModel.find();

      res.status(200).json({
        message: "Articles fetched successfully",
        payload: articles,
      });
    } catch (err) {
      next(err);
    }
  }
);

// ==========================
// BLOCK USER
// ==========================
adminApp.patch(
  "/block-user/:userId",
  verifyToken(["ADMIN"]),
  async (req, res, next) => {
    try {
      const { userId } = req.params;

      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        {
          isUserActive: false,
        },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.status(200).json({
        message: "User blocked successfully",
        payload: updatedUser,
      });
    } catch (err) {
      next(err);
    }
  }
);

// ==========================
// UNBLOCK USER
// ==========================
adminApp.patch(
  "/unblock-user/:userId",
  verifyToken(["ADMIN"]),
  async (req, res, next) => {
    try {
      const { userId } = req.params;

      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        {
          isUserActive: true,
        },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.status(200).json({
        message: "User unblocked successfully",
        payload: updatedUser,
      });
    } catch (err) {
      next(err);
    }
  }
);

// ==========================
// DELETE ARTICLE
// ==========================
adminApp.delete(
  "/article/:articleId",
  verifyToken(["ADMIN"]),
  async (req, res, next) => {
    try {
      const { articleId } = req.params;

      const deletedArticle = await ArticleModel.findByIdAndDelete(articleId);

      if (!deletedArticle) {
        return res.status(404).json({
          message: "Article not found",
        });
      }

      res.status(200).json({
        message: "Article deleted successfully",
        payload: deletedArticle,
      });
    } catch (err) {
      next(err);
    }
  }
);

// ==========================
// DASHBOARD STATS
// ==========================
adminApp.get(
  "/dashboard-stats",
  verifyToken(["ADMIN"]),
  async (req, res, next) => {
    try {
      const totalUsers = await UserModel.countDocuments();
      const totalArticles = await ArticleModel.countDocuments();
      const activeUsers = await UserModel.countDocuments({
        isUserActive: true,
      });

      res.status(200).json({
        message: "Dashboard stats fetched successfully",
        payload: {
          totalUsers,
          totalArticles,
          activeUsers,
        },
      });
    } catch (err) {
      next(err);
    }
  }
);

// ==========================
// INVALID ADMIN ROUTE
// ==========================
adminApp.use((req, res) => {
  res.status(404).json({
    message: `Invalid Admin API Path: ${req.url}`,
  });
});
```

---

# Required VerifyToken Middleware Example

```js
import jwt from "jsonwebtoken";

export const verifyToken = (allowedRoles = []) => {
  return (req, res, next) => {
    try {
      const token = req.cookies.token;

      if (!token) {
        return res.status(401).json({
          message: "Token missing",
        });
      }

      const decodedToken = jwt.verify(
        token,
        process.env.SECRET_KEY
      );

      if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(decodedToken.role)
      ) {
        return res.status(403).json({
          message: "Unauthorized access",
        });
      }

      req.user = decodedToken;
      next();
    } catch (err) {
      next(err);
    }
  };
};
```

---

# Required Imports in server.js

```js
import { adminApp } from "./APIs/AdminAPI.js";

app.use("/admin-api", adminApp);
```

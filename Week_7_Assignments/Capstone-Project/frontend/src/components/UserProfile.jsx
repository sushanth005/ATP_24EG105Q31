import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router";

import axios from "axios";
import { useEffect, useState } from "react";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function UserProfile() {
  const logout = useAuth((state) => state.logout);
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        //read articles of all authors
        let res=await axios.get("http://localhost:2006/user-api/articles",{withCredentials:true})
        //update articles state
        if(res.status===200){
          setArticles((await res).data.payload)
        }
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  // convert UTC → IST
  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const onLogout = async () => {
    await logout();

    navigate("/login");
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* ERROR */}
      {error && <p className={errorClass}>{error}</p>}

      {/* PROFILE HEADER */}
      <div className="bg-white border border-[#e8e8ed] rounded-3xl p-6 mb-8 shadow-sm flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 rounded-full object-cover border"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center text-xl font-semibold">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Name */}
          <div>
            <p className="text-sm text-[#6e6e73]">Welcome back</p>
            <h2 className="text-xl font-semibold text-[#1d1d1f]">{currentUser?.firstName}</h2>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          className="bg-[#ff3b30] text-white text-sm px-5 py-2 rounded-full hover:bg-[#d62c23] transition"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* ARTICLES SECTION */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">Latest Articles</h3>

        {/* EMPTY STATE */}
        {articles.length === 0 ? (
          <p className="text-[#a1a1a6] text-sm text-center py-10">No articles available yet</p>
        ) : (
          <div className={articleGrid}>
            {articles.map((articleObj) => (
              <div className={articleCardClass} key={articleObj._id}>
                <div className="flex flex-col h-full">
                  {/* TOP */}
                  <div>
                    <p className={articleTitle}>{articleObj.title}</p>

                    <p className="text-sm text-[#6e6e73] mt-1">{articleObj.content.slice(0, 80)}...</p>

                    <p className={`${timestampClass} mt-2`}>{formatDateIST(articleObj.createdAt)}</p>
                  </div>

                  {/* ACTION */}
                  <button className={`${ghostBtn} mt-auto pt-4`} onClick={() => navigateToArticleByID(articleObj)}>
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;





















/*import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";
import { useState } from "react";
import axios from "axios";
import { pageWrapper, 
  navLinkClass, 
  divider,
  articleCardClass,
  articleTitle,
  articleExcerpt,
  articleMeta,
  ghostBtn,
  loadingClass,
  errorClass,
  emptyStateClass,
  articleStatusActive,
  articleStatusDeleted,
} from "../styles/common";
import { useEffect } from "react";

function UserProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

   const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

useEffect(() => {
    if (!currentUser) return;

    const getArticles = async () => {

      try {
      //set loading to true
       setLoading(true);
       //read articles of current author
        let res= await axios.get("http://localhost:2006/user-api/articles",{withCredentials:true})
        if(res.status===200)
        {
          //update articles state
          setArticles(res.data.payload);
        }

      } catch (err) {
        console.log(err);
        setError(err.response?.data?.error || "Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [currentUser]);


  //CALL THIS FUNCTION ON LOGOUT
  const onLogout = async () => {
    //call login route
    await logout();

    //on logout
    navigate("/login");
  };

  const openArticle = (article) => {
    navigate(`/article/${article._id}`, {
    state: article,
    });
  };

  return (
    <div className={pageWrapper}>*/
      {/* PROFILE HEADER */}
      /*<div className="bg-white border border-[#e8e8ed] rounded-3xl p-6 mb-8 shadow-sm flex items-center justify-between">*/
        {/* LEFT */}
        /*<div className="flex items-center gap-4">*/
          {/* Avatar */}
          /*{currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 rounded-full object-cover border"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center text-xl font-semibold">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}*/

          {/* Name */}
          /*<div>
            <p className="text-sm text-[#6e6e73]">Welcome back</p>
            <h2 className="text-xl font-semibold text-[#1d1d1f]">{currentUser?.firstName}</h2>
          </div>
        </div>*/

        {/* LOGOUT */}
        /*<button
          className="bg-[#ff3b30] text-white text-sm px-5 py-2 rounded-full hover:bg-[#d62c23] transition"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>*/

      {/* NAVIGATION (TABS STYLE) */}
      /*<div className="flex gap-3 mb-6 bg-[#f5f5f7] p-2 rounded-full w-fit">
        <NavLink
          to="articles"
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-full text-[#0066cc] text-sm font-medium shadow-sm"
              : `${navLinkClass} px-5 py-2`
          }
        >
          Articles
        </NavLink>
      </div>

      <div className={divider}></div>*/

      {/* CONTENT */}
      /*<div className="mt-6">*/
        {/*<Outlet />*/}
          /*<div className="mt-6">
            {loading && <p>Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}

              {articles.length === 0 ? (
            <p>No articles found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {articles.map((article) => (
        <div key={article._id} className={`${articleCardClass} relative flex flex-col`}>*/
          {/* Status Badge */}
          /*<span className={article.isArticleActive ? articleStatusActive : articleStatusDeleted}>
            {article.isArticleActive ? "ACTIVE" : "DELETED"}
          </span>

          <div className="flex flex-col gap-2">
            <p className={articleMeta}>{article.category}</p>

            <p className={articleTitle}>{article.title}</p>

            <p className={articleExcerpt}>{article.content.slice(0, 60)}...</p>
          </div>

          <button className={`${ghostBtn} mt-auto pt-4`} onClick={() => openArticle(article)}>
            Read Article →
          </button>
        </div>
      ))}
            </div>
              )}
          </div>
      </div>
    </div>
  );
}

export default UserProfile;*/





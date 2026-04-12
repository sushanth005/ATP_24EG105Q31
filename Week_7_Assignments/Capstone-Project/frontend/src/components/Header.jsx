import { NavLink } from "react-router";
import { useAuth } from "../store/authStore";
import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
  navLinkClass,
  navLinkActiveClass,
} from "../styles/common";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);

  // decide profile route based on role
  const getProfilePath = () => {
    if (!user) return "/";

    switch (user.role) {
      case "AUTHOR":
        return "/author-profile";
      case "ADMIN":
        return "/admin-profile";
      default:
        return "/user-profile";
    }
  };

  return (
    <nav className={navbarClass}>
      <div className={navContainerClass}>

        {/* LOGO */}
        <NavLink to="/" className={navBrandClass}>
          MyBlog
        </NavLink>

        <ul className={navLinksClass}>

          {/* HOME */}
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? navLinkActiveClass : navLinkClass
              }
            >
              Home
            </NavLink>
          </li>

          {/* NOT LOGGED IN */}
          {!isAuthenticated && (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? navLinkActiveClass : navLinkClass
                  }
                >
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? navLinkActiveClass : navLinkClass
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}

          {/* LOGGED IN */}
          {isAuthenticated && (
            <li>
              <NavLink
                to={getProfilePath()}
                className={({ isActive }) =>
                  isActive ? navLinkActiveClass : navLinkClass
                }
              >
                Profile
              </NavLink>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Header;





/*import React from 'react'
import { NavLink } from 'react-router'
import { navBrandClass,navLinkClass,navLinksClass,navContainerClass,navbarClass,navLinkActiveClass } from '../styles/common'
import { useAuth } from '../store/authStore'

function Header() {

  const {isAuthenticated,logout}=useAuth();

  return (
    <div className="flex justify-between bg-gray-300">
        <img 
        className="w-30 p-5"
        src="#"
        alt="This Image not Available" 
        
        />

        <nav className="flex justify-end gap-9 p-8 text-2xl bg-gray-300">
            <NavLink to="/">Home</NavLink>
            <NavLink to="register">Register</NavLink>
            {isAuthenticated===true?(
            <NavLink onclick={logout} className={({isActive})=>(isActive? navLinkActiveClass:navLinkClass )}>
              Logout
            </NavLink>
            ):(
            <NavLink to="login" className={({isActive})=>(isActive? navLinkActiveClass:navLinkClass )}>
              Login
            </NavLink>
            )
            } 
        </nav>
    </div>
  )
}

export default Header*/
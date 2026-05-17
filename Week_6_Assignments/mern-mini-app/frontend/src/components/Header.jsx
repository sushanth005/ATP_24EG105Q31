import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-6 p-5 bg-pink-500 text-white shadow-md">

      {/* Home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-lg sm:text-2xl font-semibold transition hover:text-black ${
            isActive ? "text-black" : ""
          }`
        }
      >
        Home
      </NavLink>

      {/* Create Employee */}
      <NavLink
        to="/create-emp"
        className={({ isActive }) =>
          `text-lg sm:text-2xl font-semibold transition hover:text-black ${
            isActive ? "text-black" : ""
          }`
        }
      >
        Create Employee
      </NavLink>

      {/* Employee List */}
      <NavLink
        to="/list"
        className={({ isActive }) =>
          `text-lg sm:text-2xl font-semibold transition hover:text-black ${
            isActive ? "text-black" : ""
          }`
        }
      >
        Employee List
      </NavLink>

    </nav>
  );
}

export default Header;

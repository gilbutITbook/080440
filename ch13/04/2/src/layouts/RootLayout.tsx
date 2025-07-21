import { useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";

export default function RootLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/about");
    }, 3000);
  }, [navigate]);

  return (
    <>
      <header>Header</header>
      <nav>
        <Link to="/">Home</Link>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/my/dashboard"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Dashboard
        </NavLink>
        <NavLink to="/my/dashboard/settings">
          {({ isActive }) => <span>settings({isActive && "selected"})</span>}
        </NavLink>
      </nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

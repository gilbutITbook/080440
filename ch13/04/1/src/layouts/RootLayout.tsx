import { Link, NavLink, Outlet } from "react-router";

export default function RootLayout() {
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

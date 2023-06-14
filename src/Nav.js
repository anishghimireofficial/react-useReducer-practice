import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">Counter</Link>
        <Link to="/form">Form</Link>
      </div>
      <Outlet />
    </>
  );
};
export default Nav;

import { Link } from "react-router-dom";
import "./NavBar.css"; // Importing the CSS for styling

const NavBar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Posts", path: "/posts" },
    { label: "User", path: "/user" },
  ];

  return (
    <div className="navbar">
      {navItems.map((item) => (
        <Link key={item.path} to={item.path} style={{ margin: "0 10px" }}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;

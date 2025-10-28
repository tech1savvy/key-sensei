import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary p-1">
      <Link to="/" className="navbar-brand">
        <i className="bi bi-keyboard p-1"></i>
        Key Sensei
      </Link>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router";
import { useAuth } from "../contexts/useAuth.jsx";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-body-tertiary p-2">
      <div className="container">
        <div className="row">
          <Link to="/" className="col-10 navbar-brand">
            <i className="bi bi-keyboard p-1"></i>
            Key Sensei
          </Link>
          <div className="row col-2">
            {user ? (
              <>
                <span className="col nav-link">{user.username}</span>
                <button type="button" onClick={logout} className="col nav-link btn btn-link">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="col nav-link">
                  Login
                </Link>
                <Link to="/register" className="col nav-link">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
          <div className="col-2 d-flex justify-content-end">
            {user ? (
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-link nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person"></i> {user.username}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button
                      type="button"
                      className="dropdown-item text-danger"
                      onClick={logout}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
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

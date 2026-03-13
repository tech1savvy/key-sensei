import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../contexts/useAuth";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchHistory = async () => {
      try {
        const response = await fetch(
          `/api/typing-test/results?page=${page}&limit=${limit}`,
          { credentials: "include" }
        );
        const data = await response.json();
        if (data.results) {
          setHistory(data.results);
          setTotal(data.total);
        }
      } catch (error) {
        console.error("Failed to fetch history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [user, navigate, page, limit]);

  const totalPages = Math.ceil(total / limit);

  const formatDate = (dateString) => {
    const utcDate = new Date(dateString);
    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(utcDate);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-person-circle" style={{ fontSize: "4rem" }}></i>
              <h4 className="mt-3">{user.username}</h4>
              <p className="text-muted">{user.email}</p>
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Typing Test History</h5>
              <small className="text-muted">{total} total results</small>
            </div>
            <div className="card-body">
              {history.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-muted mb-3">No typing test results yet</p>
                  <Link to="/" className="btn btn-primary">
                    Take a Test
                  </Link>
                </div>
              ) : (
                <>
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>WPM</th>
                          <th>Accuracy</th>
                        </tr>
                      </thead>
                      <tbody>
                        {history.map((result) => (
                          <tr key={result._id}>
                            <td>{formatDate(result.createdAt)}</td>
                            <td>
                              <span className="badge bg-success">{result.wpm}</span>
                            </td>
                            <td>
                              <span className="badge bg-info">{result.accuracy}%</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {totalPages > 1 && (
                    <nav className="mt-3">
                      <ul className="pagination justify-content-center mb-0">
                        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                          <button
                            className="page-link"
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                          >
                            Previous
                          </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                          (p) => (
                            <li
                              key={p}
                              className={`page-item ${page === p ? "active" : ""}`}
                            >
                              <button className="page-link" onClick={() => setPage(p)}>
                                {p}
                              </button>
                            </li>
                          )
                        )}
                        <li
                          className={`page-item ${page === totalPages ? "disabled" : ""}`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

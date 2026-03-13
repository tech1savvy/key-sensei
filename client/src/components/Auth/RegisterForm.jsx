import { useState } from "react";
import { Link, useNavigate } from "react-router";
import FormInput from "./FormInput";
import { useAuth } from "../../contexts/useAuth.jsx";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await register({ username, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="border p-3">
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="p-3 mb-3">
              <FormInput
                id="username"
                label="Username"
                type="text"
                required={true}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="p-3 mb-3">
              <FormInput
                id="email"
                label="Email"
                type="email"
                required={true}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="p-3 mb-3">
              <FormInput
                id="password"
                type="password"
                label="Password"
                required={true}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-center">
                <input
                  className="btn btn-success"
                  type="submit"
                  value={loading ? "Registering..." : "Register"}
                  disabled={loading}
                />
              </div>
            </div>
          </form>
          <div>
            <Link to="/login">Already have an account! Click here!</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;

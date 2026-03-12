import { Link } from "react-router";
import FormInput from "./FormInput";
import useLoginForm from "./hooks/useLoginForm";

const LoginForm = () => {
  const { email, setEmail, password, setPassword, handleSubmit } =
    useLoginForm();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="border p-3">
          <form className="" onSubmit={handleSubmit}>
            <div id="emailInput" className="p-3 mb-3">
              <FormInput
                id="email"
                label="Email"
                type="text"
                required={true}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div id="passwordInput" className="p-3 mb-3">
              <FormInput
                id="password"
                type="password"
                label="Password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-center">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Login"
                />
              </div>
            </div>
          </form>
          <div>
            <Link to="/register">Don't have a account! Click here!</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;

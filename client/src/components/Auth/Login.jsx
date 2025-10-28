import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default behaviour of html form submision and page refresh
    const user = { username, password };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => console.log("user created"));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};
export default Login;

import { useState } from "react";
const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };

    // TODO: Setup vite server proxy
    fetch("api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => console.log("user created"));
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };
};

export default useLoginForm;

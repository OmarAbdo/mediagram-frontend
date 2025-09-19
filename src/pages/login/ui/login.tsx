import { useEffect, useState } from "react";
import { useLogin } from "../model/LoginMutation";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetMessage, setResetMessage] = useState("")

  const loginMutation = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginMutation.mutateAsync({ email, password });
      console.log("Success", { email, password });
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    console.log("Login form will reset in 5 minutes of being inactive")
    const myTimer = setTimeout(() => {
      setPassword("")
      setEmail("")
      setResetMessage("It's been 5 seconds of being inactive, so the form decided to reset itself.")
    }, 5000)
  
    return () => {
      console.log("componentWillMount")
      clearTimeout(myTimer)

    }
  }, [password, email]);

  return (
    <>
      <p> Imma grown ass LoginPage </p>
      <form onSubmit={handleSubmit}>
        <p>The form will reset in 5 seconds of being inactive</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loginMutation.isPending}>
          {loginMutation.isPending ? "Loading..." : "Login"}
        </button>
        { resetMessage }
      </form>
    </>
  );
};

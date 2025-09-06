import { useEffect, useState } from "react";
import { useLogin } from "../model/LoginMutation";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    console.log("LoginPage inside useEffect");
  }, []);

  console.log("LoginPage outside useEffect");

  return (
    <>
      <p> Imma grown ass LoginPage</p>
      <form onSubmit={handleSubmit}>
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
      </form>
    </>
  );
};

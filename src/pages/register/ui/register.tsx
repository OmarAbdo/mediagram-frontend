import { useState } from "react";
import { useRegister } from "../model/RegisterMutation";

export const RegisterForm = () => {};

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerMutation = useRegister();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await registerMutation.mutateAsync({ email, password });
      console.log(response);
      console.log("Success", { email, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <p>Register Page</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={registerMutation.isPending}>
          {registerMutation.isPending ? "Loading..." : "Register"}
        </button>
      </form>
    </>
  );
};

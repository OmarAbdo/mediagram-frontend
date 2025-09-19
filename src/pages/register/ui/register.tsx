import { useState } from "react";
import { useRegister } from "../model/RegisterMutation";
import { DropDownUi } from "../../../shared/ui/atom/dropdown/ui";

export const RegisterForm = () => { };

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favoriteColor, setFavoriteColor] = useState(1);

  const colorOptions = [
    { value: 1, label: 'Red' },
    { value: 2, label: 'Blue' },
    { value: 3, label: 'Green' },
  ];

  const handleDropdownComponentChange = (value: number) => {
    setFavoriteColor(value);
  }

  const registerMutation = useRegister();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("we also have a selected color", favoriteColor);
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
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <DropDownUi
          options={colorOptions}
          value={favoriteColor}
          onChange={handleDropdownComponentChange}
        />

        <button type="submit" disabled={registerMutation.isPending}>
          {registerMutation.isPending ? "Loading..." : "Register"}
        </button>
      </form>
    </>
  );
};

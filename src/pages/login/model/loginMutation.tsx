import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/loginApi";
import { useNavigate } from "react-router"

export function useLogin() {

  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginApi,
    mutationKey: ["login"],
    onSuccess: (data) => {
      console.log(data);
      console.log("Success");
      navigate("/", { replace: true })
    },
    onError: () => {
      console.log("Error");
    },
  });
}

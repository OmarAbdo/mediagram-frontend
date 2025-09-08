import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../api/registerApi";
import { useNavigate } from "react-router"

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerApi,
    mutationKey: ["register"],
    retry: false,
    onSuccess: () => {
      console.log("Success");
      navigate("/", { replace: true })

    },
    onError: () => {
      console.log("Error");
    },
  });
};

import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      // Redirect to login page upon successful signup
      // Example: navigate("/login");

      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
    onError: (error) => {
      // Handle any errors during signup process
      console.log(`ERROR : ${error.message}`);
      toast.error("Error creating account");
    },
  });

  return { signup, isLoading };
}

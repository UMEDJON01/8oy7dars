import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/userSlice";
import toast from "react-hot-toast";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);

  const loginUser = async (email, password) => {
    console.log(email, password);
    setIsPending(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user; 
      setIsPending(false);
      dispatch(login(user));
      toast.success(`Welcome ${user.displayName}`);
    } catch (error) {
      toast.error(error.message);
      setIsPending(false);
    }
  };

  return { loginUser, isPending };
};

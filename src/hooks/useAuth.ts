import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_ENTRY_PATH, UN_AUTH_ENTRY_PATH } from "../configs/app";
import { AuthService } from "../service/auth/auth.service";
import { setUser, signInSuccess, signOutSuccess } from "../stores";
import { ICredential } from "../types/auth";
import notification from "../utils/notification";
import { useAppDispatch, useAppSelector } from "./store";

function useAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token, user, signedIn } = useAppSelector(
    (state) => state.auth.session
  );

  const [, setIsVerified] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  const verifyToken = useCallback(() => {
    AuthService.verify()
      .then((res) => {
        setIsVerified(true);
        dispatch(setUser(res));
      })
      .catch((error) => {
        setIsVerified(false);
        notification(error?.response?.data?.message || error.toString());
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (token) {
      verifyToken();
    } else {
      setLoading(false);
    }
  }, [token]);

  const signIn = async (values: ICredential) => {
    try {
      const { token, user } = await AuthService.signIn(
        values.email,
        values.password
      );
      if (!!token && user) {
        ///update
        dispatch(signInSuccess({ token, user }));
        notification("sign in success!", "success");
      } else {
        notification("Invalid user!", "warning");
      }
      navigate(AUTH_ENTRY_PATH);
    } catch (errors: any) {
      notification(errors?.response?.data?.message || errors.toString());
    }
  };
  const signOut = () => {
    dispatch(signOutSuccess());
    navigate(UN_AUTH_ENTRY_PATH);
  };

  return {
    authenticated: !!(token && signedIn && user),
    signIn,
    signOut,
    isLoading,
  };
}

export default useAuth;

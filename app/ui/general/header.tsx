"use client";
import Logo from "./logo";
import LoginModal from "../auth/login-modal";
import { useContext } from "react";
import { AuthorizationContext } from "../../context/AuthContext";
import useAuth from "../../../hooks/useAuth";

export default function Header() {
  const { data, loading } = useContext(AuthorizationContext);
  const { signout } = useAuth();
  return (
    <div className="flex py-1">
      <Logo />
      {loading ? (
        <></>
      ) : (
        <>
          {data ? (
            <button onClick={signout}>logout</button>
          ) : (
            <>
              <LoginModal isSignin={true} />
              <LoginModal isSignin={false} />
            </>
          )}
        </>
      )}
    </div>
  );
}

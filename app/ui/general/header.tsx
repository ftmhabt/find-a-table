"use client";
import Logo from "./logo";
import LoginModal from "../auth/login-modal";
import { useContext } from "react";
import { AuthorizationContext } from "../../context/AuthContext";

export default function Header() {
  const { data } = useContext(AuthorizationContext);
  return (
    <div className="flex py-1">
      <Logo />
      {data ? (
        <button>logout</button>
      ) : (
        <>
          <LoginModal isSignin={true} />
          <LoginModal isSignin={false} />
        </>
      )}
    </div>
  );
}

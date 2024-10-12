"use client";

import { ReactNode, useContext } from "react";
import Search from "./search";
import { AuthorizationContext } from "../../context/AuthContext";
import useAuth from "../../../hooks/useAuth";
import LoginModal from "../auth/login-modal";

export default function Header() {
  const { data, loading } = useContext(AuthorizationContext);
  const { signout } = useAuth();
  return (
    <header
      className={`flex min-h-20 h-full py-4 bg-secondary text-primary items-center justify-evenly`}
    >
      <Search />
      {loading ? (
        <></>
      ) : (
        <>{data ? <button onClick={signout}>logout</button> : <LoginModal />}</>
      )}
    </header>
  );
}

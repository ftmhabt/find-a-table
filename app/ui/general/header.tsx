"use client";

import { ReactNode, useContext, useState } from "react";
import Search from "./search";
import { AuthorizationContext } from "../../context/AuthContext";
import useAuth from "../../../hooks/useAuth";
import LoginModal from "../auth/login-modal";
import { IoMdLogOut } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";

export default function Header() {
  const { data, loading } = useContext(AuthorizationContext);
  const { signout } = useAuth();

  const [isSignin, setIsSignin] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  return (
    <header
      className={`flex gap-2 min-h-20 h-full py-4 px-6 bg-secondary text-primary items-center justify-evenly lg:justify-center lg:gap-5`}
    >
      <Search />
      {loading ? (
        <></>
      ) : (
        <>
          {data ? (
            <IoMdLogOut onClick={signout} size={25} />
          ) : (
            <>
              <PiUserCircle
                size={30}
                className="text-primary"
                onClick={handleOpen}
              />
              <LoginModal
                isOpen={open}
                isSignin={isSignin}
                setSignin={() => setIsSignin(true)}
                setSignup={() => setIsSignin(false)}
              />
            </>
          )}
        </>
      )}
    </header>
  );
}

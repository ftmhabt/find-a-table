"use client";

import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  phone: string;
}
interface State {
  loading: boolean;
  data: User | null;
  error: string | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthorizationContext = createContext<AuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    data: null,
    error: null,
  });

  const fetchUser = async () => {
    try {
      const jwt = getCookie("jwt");

      if (!jwt) {
        setAuthState({
          data: null,
          error: null,
          loading: false,
        });
      }

      const response = await axios.get(`/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.message,
        loading: false,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthorizationContext.Provider
      value={{
        ...authState,
        setAuthState,
      }}
    >
      {authState.error ? authState.error : children}
    </AuthorizationContext.Provider>
  );
}

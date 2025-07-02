"use client";
import React, { useContext } from "react";
import { AuthorizationContext } from "../context/AuthContext";

export default function Error() {
  const { error } = useContext(AuthorizationContext);

  return error && <div>{error}</div>;
}

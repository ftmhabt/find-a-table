"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../general/button";
import SigninForm from "./signin-form";
import SignupForm from "./signup-form";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 550,
  width: 400,
  bgcolor: "#F87171",
  boxShadow: 24,
  p: 4,
};

export interface InputProps {
  inputs: { name: string, city: string, email: string, phone: string, password: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function LoginModal({ isSignin }: { isSignin: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = useState({ name: "", city: "", email: "", phone: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const props = {
    inputs,
    handleChange
  }

  return (
    <div>
      <Button text={isSignin ? 'sign in' : 'sign up'} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isSignin ? <SigninForm props={props} /> : <SignupForm props={props} />}
        </Box>
      </Modal>
    </div>
  );
}

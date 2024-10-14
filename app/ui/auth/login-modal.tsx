"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SigninForm from "./signin-form";
import SignupForm from "./signup-form";
import { PiUserCircle } from "react-icons/pi";
import { Grid } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#F5F6F8",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  outline: 0,
};

export interface InputProps {
  inputs: {
    name: string;
    city: string;
    email: string;
    phone: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
}

export default function LoginModal() {
  const [isSignin, setIsSignin] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const props = {
    inputs,
    handleChange,
    handleClose,
  };

  return (
    <div>
      <PiUserCircle size={30} className="text-primary" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid size={{ xs: 2, md: 6 }}>
              {isSignin ? (
                <>
                  <SigninForm props={props} />
                  <p className="text-center">
                    do not have an account?{" "}
                    <button
                      className="bg-secondary outline-0 border-0 underline"
                      onClick={() => setIsSignin(false)}
                    >
                      make one
                    </button>
                  </p>
                </>
              ) : (
                <>
                  <SignupForm props={props} />
                  <p className="text-center">
                    have an account?{" "}
                    <button
                      className="bg-secondary outline-0 border-0 underline"
                      onClick={() => setIsSignin(true)}
                    >
                      sign in
                    </button>
                  </p>
                </>
              )}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

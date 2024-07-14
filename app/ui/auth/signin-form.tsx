import { useState } from "react";
import LoginWrapper from "./login-wrapper";
import { InputProps } from "./login-modal";

export default function SigninForm({ props }: { props: InputProps }) {
  const { inputs, handleChange } = props;
  return (
    <LoginWrapper>
      <div>welcome</div>
      <div>sign in</div>
      <input type="email" name="email" id="email" placeholder="email" value={inputs.email} onChange={(e) => handleChange(e)} />
      <input type="password" name="password" id="password" placeholder="password" value={inputs.password} onChange={(e) => handleChange(e)} />
      <button>submit</button>
    </LoginWrapper>
  );
}

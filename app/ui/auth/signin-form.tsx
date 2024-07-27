import { useEffect, useState } from "react";
import LoginWrapper from "./login-wrapper";
import { InputProps } from "./login-modal";
import useAuth from "../../../hooks/useAuth";

export default function SigninForm({ props }: { props: InputProps }) {
  const { inputs, handleChange } = props;
  const [disabled, setDisabled] = useState(true);
  const { signin } = useAuth();

  useEffect(() => {
    if (inputs.email && inputs.password) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }
  }, [inputs])
  return (
    <LoginWrapper>
      <div>welcome</div>
      <div>sign in</div>
      <input type="email" name="email" id="email" placeholder="email" value={inputs.email} onChange={(e) => handleChange(e)} />
      <input type="password" name="password" id="password" placeholder="password" value={inputs.password} onChange={(e) => handleChange(e)} />
      <button disabled={disabled} className="disabled:bg-gray-500" onClick={() => signin({ email: inputs.email, password: inputs.password })}>submit</button>
    </LoginWrapper>
  );
}

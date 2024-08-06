import { useContext, useEffect, useState } from "react";
import LoginWrapper from "./login-wrapper";
import { InputProps } from "./login-modal";
import useAuth from "../../../hooks/useAuth";
import { AuthorizationContext } from "../../context/AuthContext";
import spinner from '../../icons/spinner.png'
import Image from 'next/image'

export default function SigninForm({ props }: { props: InputProps }) {
  const { inputs, handleChange,handleClose } = props;
  const [disabled, setDisabled] = useState(true);
  const { signin } = useAuth();
  const { data, error, loading, setAuthState } = useContext(AuthorizationContext)

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
      {loading ? <Image src={spinner} alt='loading' /> : <>
        <div>welcome</div>
        <div>sign in</div>
        <input type="email" name="email" id="email" placeholder="email" value={inputs.email} onChange={(e) => handleChange(e)} />
        <input type="password" name="password" id="password" placeholder="password" value={inputs.password} onChange={(e) => handleChange(e)} />
        <button disabled={disabled} className="disabled:bg-gray-500" onClick={() => signin({ email: inputs.email, password: inputs.password },handleClose)}>submit</button>
        <h1>{error? error:''}</h1>
      </>}
    </LoginWrapper>
  );
}

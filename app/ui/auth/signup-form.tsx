import LoginWrapper from "./login-wrapper";
import { InputProps } from "./login-modal";
import { useContext, useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { AuthorizationContext } from "../../context/AuthContext";

export default function SignupForm({ props }: { props: InputProps }) {
  const { inputs, handleChange, handleClose } = props;
  const [disabled, setDisabled] = useState(true);
  const { signup } = useAuth();
  const { data, error, loading, setAuthState } =
    useContext(AuthorizationContext);

  useEffect(() => {
    if (
      inputs.name &&
      inputs.city &&
      inputs.email &&
      inputs.password &&
      inputs.phone
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputs]);

  return (
    <LoginWrapper>
      {loading ? (
        <img src={loading} alt="loading" />
      ) : (
        <>
          <div>welcome</div>
          <div>register</div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={inputs.name}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="city"
            value={inputs.city}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={inputs.email}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="phone"
            value={inputs.phone}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={inputs.password}
            onChange={(e) => handleChange(e)}
          />
          <button
            disabled={disabled}
            className="disabled:bg-gray-500"
            onClick={() => signup(inputs, handleClose)}
          >
            submit
          </button>
          <h1>{error ? error : ""}</h1>
        </>
      )}
    </LoginWrapper>
  );
}

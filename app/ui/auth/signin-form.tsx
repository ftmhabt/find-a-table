import LoginWrapper from "./login-wrapper";

export default function SigninForm() {
  return (
    <LoginWrapper>
      <div>welcome</div>
      <div>sign in</div>
      <input type="email" name="email" id="email" placeholder="email"/>
      <input type="password" name="password" id="password" placeholder="password"/>
      <button>submit</button>
    </LoginWrapper>
  );
}

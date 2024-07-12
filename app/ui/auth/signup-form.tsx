import LoginWrapper from "./login-wrapper";

export default function SignupForm() {
  return (
    <LoginWrapper>
      <div>welcome</div>
      <div>register</div>
      <input type="text" name="fullname" id="fullname" placeholder="fullname"/>
      <input type="text" name="city" id="city" placeholder="city"/>
      <input type="email" name="email" id="email" placeholder="email"/>
      <input type="password" name="password" id="password" placeholder="password"/>
      <button>submit</button>
    </LoginWrapper>
  );
}

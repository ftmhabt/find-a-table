import Logo from "./logo";
import LinkButton from "./link-button";
import LoginModal from "../auth/login-modal";

export default function Header() {
  return (
    <div className="flex py-1">
        <Logo/>
        <LoginModal isSignin={true}/>
        <LoginModal isSignin={false}/>
    </div>
  )
}

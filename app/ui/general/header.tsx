import Logo from "./logo";
import LinkButton from "./link-button";
import SignUpModal from "../auth/signup";

export default function Header() {
  return (
    <div className="flex py-1">
        <Logo/>
        <LinkButton text="sign in" url=''/>
        <SignUpModal/>
    </div>
  )
}

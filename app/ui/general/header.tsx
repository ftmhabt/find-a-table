import Logo from "./logo";
import LinkButton from "./link-button";

export default function Header() {
  return (
    <div className="flex py-1">
        <Logo/>
        <LinkButton text="sign in" url=''/>
        <LinkButton text="sign up" url=''/>
    </div>
  )
}

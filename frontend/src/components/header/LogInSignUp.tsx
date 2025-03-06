import Link from "next/link";
import { ButtonLinkProp } from "./HeaderTypes";

function ButtonLink({name, linkName, css}: ButtonLinkProp) {
    return (
        <Link href={linkName}>
        <button className={css}>
            {name}
        </button>
        </Link>
    );
}

export function LogInSignUp() {
    return (
      <div className="h-9 mx-3 sm:w-40 sm:relative max-[350px]:mx-auto">
        <ButtonLink name={"Sign Up"} linkName={"/register"}
          css="header-sign-button" />
        <ButtonLink name={"Log In"} linkName={"/login"}
          css="header-login-button" />
      </div>
    );
  }
"use client";

import Link from "next/link";

interface ButtonLinkProp {
  name:string,
  linkName: string,
  css: string
}

function ButtonLink({name, linkName, css}: ButtonLinkProp) {
  return (
    <Link href={linkName}>
      <button className={css}>
        {name}
      </button>
    </Link>
  );
}

export default function Home() {

  return (
    <>
      <main className={`border-test flex-norm-col min-h-screen bg-blue-500 p-6`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Full Stack Development Space</h1>
        <p className="text-gray-600 mb-6">
          Explore the platform. Log in to access more features.
        </p>
        <div className="flex justify-center gap-4">
          <ButtonLink name={"Login"} linkName={"/login"} css={"main-button-login"} />
          <ButtonLink name={"Create Account"} linkName={"/register"} css={"main-button-register"} />
        </div>
      </main>
    </>
  );
}
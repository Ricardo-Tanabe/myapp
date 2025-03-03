"use client";

import Link from "next/link";

interface ButtonLinkProp {
  id: number,
  name:string,
  linkName: string,
  css: string
}

function Footer() {
  return(
    <>
      <footer className={`border-test bg-white h-24`}></footer>
    </>
  )
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

function ButtonContainer({buttons, cssAuth}: {buttons: ButtonLinkProp[], cssAuth:string}) {
  return (
    <div className={cssAuth}>
      {buttons.map(({ id, name, linkName, css }) => (
        <ButtonLink key={id} id={id} name={name} linkName={linkName} css={css} />
      ))}
    </div>
  );
}

export default function Home() {
  const cssAuth = "flex justify-center gap-4"

  const buttonsAuth: ButtonLinkProp[] = [
    { id: 1, name: "Login", linkName: "/login",
      css: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition" },
    { id: 2, name: "Create Account", linkName: "/register",
      css: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition" }
  ];

  return (
    <>
      <main className={`border-test flex-norm-col min-h-screen bg-gray-100 p-6`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Full Stack Development Space</h1>
        <p className="text-gray-600 mb-6">
          Explore the platform. Log in to access more features.
        </p>
        <ButtonContainer buttons={buttonsAuth} cssAuth={cssAuth}/>
      </main>
      <Footer />
    </>
  );
}
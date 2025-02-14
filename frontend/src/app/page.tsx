import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-3xl mb-4">Bem-vindo à Home</h1>
      <Link href="/login">
        <button className="bg-blue-500 text-white p-2 rounded">
          Ir para Login
        </button>
      </Link>
    </div>
  );
}
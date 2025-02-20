"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bem-vindo!</h1>
        <p className="text-gray-600 mb-6">
          Explore a plataforma. Faça login para acessar mais recursos.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
              Ir para Login
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition">
              Criar Conta
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
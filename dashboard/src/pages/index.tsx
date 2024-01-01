"use client";

import type { NextPage } from "next";
import { FaDiscord } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  // Function to handle login click
  const handleLogin = () => {
    // Redirect to the authentication endpoint
    router.push("http://localhost:3001/api/auth/discord");
  };
  return (
    <>
      <title>Welcome!</title>
      <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
      <Link rel="preconnect" href="https://fonts.gstatic.com"></Link>
      <Link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      ></Link>
      <main>
        <div className="flex flex-col h-screen justify-center items-center">
          <h1 className="text-8xl mb-4">Welcome</h1>
          <button
            onClick={handleLogin}
            className="flex flex-row items-center gap-2 login border-2 border-white rounded-lg px-3 py-1"
          >
            <span>Login With Discord</span>
            <FaDiscord />
          </button>
        </div>
      </main>
    </>
  );
}

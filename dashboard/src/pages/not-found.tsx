import type { NextPage } from "next";

import "./globals.css";

const notFound: NextPage = () => {
  return (
    <main className="h-screen flex-col flex gap-3 justify-center items-center">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <title>404</title>
      <div className="flex gap-3 justify-center items-center">
        <h1 className="text-4xl border-r-2 pr-3">404</h1>
        <p className="text-2xl">Page Not Found</p>
      </div>
      <div className="flex justify-center items-center">
        <a className="hover:text-gray-300" href="../">
          Home
        </a>
      </div>
    </main>
  );
};

export default notFound;

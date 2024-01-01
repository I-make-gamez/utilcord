import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { fetchUserGuildInfo } from "@/utils/api";
import { useState, ChangeEvent } from "react";
import axios from "axios";

const APIPage: NextPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const params = {
        content: inputValue,
        channel: "1185017672879046737",
      };

      const response = await axios.get(
        "http://localhost:3001/api/discord/rawMessage",
        { params }
      );

      setInputValue("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main>
        <div className=" h-screen flex flex-col items-center justify-center">
          <h1 className="flex mb-4 items-center justify-center text-center text-6xl">
            Welcome to the dashboard
          </h1>
          <div className="message text-center mb-4 text-4xl">
            <h1 className="text-3xl">send a message as Whiz:</h1>
            <div className="text-2xl">
              <label htmlFor="myInput">Enter text:</label>
              <input
                className="text-black"
                type="text"
                id="myInput"
                value={inputValue}
                onChange={handleChange}
              />
              <p className="mb-4">Entered Value: {inputValue}</p>
              <button onClick={handleButtonClick} className="text-3xl">
                Submit
              </button>
            </div>
          </div>
          <Link
            href="/"
            className="link-hover link flex items-center justify-center text-center text-3xl"
          >
            Back home
          </Link>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchUserGuildInfo(context);
}

export default APIPage;

import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { validateCookies } from "./helpers";
import { Guild } from "./types";

export const fetchUserGuildInfo = async (
  context: GetServerSidePropsContext
) => {
  const headers = validateCookies(context);
  if (!headers) return { redirect: { destination: "/" } };

  try {
    const { data: guilds } = await axios.get<Guild[]>(
      `http://localhost:3001/api/guilds`,
      {
        headers,
      }
    );
    console.log(guilds);
    return { props: { guilds } };
  } catch (err) {
    return { redirect: { destination: "/" } };
  }
};

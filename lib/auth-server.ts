import { cookies } from "next/headers";
import { BASE_URL } from "./constants";
import { type Session } from "@/types/session";

// Validate user in server
export const getServerSession = async (): Promise<null | Session> => {
  // Get cookies
  const cookie = cookies();
  const accessToken = cookie.get("accessToken");

  // If no token, return null
  if (!accessToken) return null;

  // Check if session exists/still valid on server
  const res = await fetch(`${BASE_URL}/api/session`, {
    cache: "no-cache",
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: { Authorization: `Bearer ${accessToken.value}` },
  });

  const resJSON = await res.json();
  console.log(resJSON);

  return resJSON.session;
};

import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthtoken() {
  const token = localStorage.getItem("token");

  const tokenDuration = getTouchDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  return getAuthtoken();
}

export function checkAuthLoader() {
  const token = getAuthtoken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
}

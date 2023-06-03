import { redirect } from "react-router-dom";

export function getAuthtoken() {
  const token = localStorage.getItem("token");
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

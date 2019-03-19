import fetchAsync from "./fetchAsync";

export const loginUser = async (login, password) => {
  return await fetchAsync("http://mrkt.little.team/api/public/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: JSON.stringify({ login, password })
  });
};

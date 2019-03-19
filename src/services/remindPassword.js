import fetchAsync from "./fetchAsync";

export const remindPassword = async login => {
  return await fetchAsync(
    "http://mrkt.little.team/api/public/users/reset-password",
    {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: JSON.stringify({ login })
    }
  );
};

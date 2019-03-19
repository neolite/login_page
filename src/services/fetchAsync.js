const fetchAsync = async (url, params = {}) => {
  let response = await fetch(url, params);
  if (response.ok) {
    const resp = await response.json();
    return resp;
  }
  throw new Error(response.status);
};

export default fetchAsync;

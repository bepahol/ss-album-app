import apisauce from "apisauce";

// our "constructor"
const create = (auth) => {
  const defaultBaseUrl = "https://itunes.apple.com";
  const baseURL = process.env.BASE_URL || defaultBaseUrl;
  // console.log("env: ", process.env);
  console.log("baseUrl: ", baseURL);

  const defaultApiKey = "none";
  const apiKey = process.env.API_KEY || defaultApiKey;

  const api = apisauce.create({
    baseURL, // base URL is read from the "constructor"
    timeout: 10000, // 10s
  });

  const getAlbums = (term) => api.get(`/search`, { term: term });

  return {
    defaults: api,
    getAlbums,
  };
};

export default {
  create,
};

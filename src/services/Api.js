import apisauce from "apisauce";

// our "constructor"
const create = (auth) => {
  const defaultBaseUrl = "https://itunes.apple.com";
  const baseURL = process.env.BASE_URL || defaultBaseUrl;
  // console.log("env: ", process.env);
  // console.log("baseUrl: ", baseURL);

  const defaultApiKey = "none";
  const apiKey = process.env.API_KEY || defaultApiKey;

  const api = apisauce.create({
    baseURL, // base URL is read from the "constructor"
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": "Origin,Content-Type,Authorization,X-Auth-Token",
      // "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS",
      // "Access-Control-Expose-Headers": "Access-Token, Uid",
      // mode: "no-cors",
      // host: "itunes.apple.com",
      //   // here are some default headers
      //   "Cache-Control": "no-cache",
      //   "Api-Key": apiKey,
      //   Accept: "application/vnd.api+json",
      //   "Content-Type": "application/vnd.api+json",
    },
    timeout: 3000, // 3s
  });

  const getAlbums = (artist) => api.get(`/search`, { term: artist, media: "music", entity: "album" });

  return {
    defaults: api,
    getAlbums,
  };
};

export default {
  create,
};

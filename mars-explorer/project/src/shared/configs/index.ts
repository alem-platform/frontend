declare const process: { env: { API_KEY?: string; BASE_URL?: string } };

const API_KEY = process.env.API_KEY;

const BASE_URL = process.env.BASE_URL;

export { API_KEY, BASE_URL };

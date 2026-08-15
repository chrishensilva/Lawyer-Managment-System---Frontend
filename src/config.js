// Always use relative '/api' — Vite proxies to localhost:5000 in dev,
// and in production the server serves from the same origin.
// Override with VITE_API_BASE_URL for split-hosting (e.g. Render + Vercel).
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
export default API_BASE_URL;


const API_URL = process.env.NODE_ENV==="production" ? "https://crescent-api.herokuapp.com/api" : "http://localhost:8000/api";
export const SIGN_IN = `${API_URL}/auth/login`
export const SIGN_UP = `${API_URL}/auth/admin-register`
export const GET_USER = `${API_URL}/auth/user`

const API_URL = process.env.NODE_ENV==="production" ? "https://crescent-api.herokuapp.com/api" : "http://localhost:8000/api";
export const SIGN_IN = `${API_URL}/auth/login`
export const SIGN_UP = `${API_URL}/auth/admin-register`
export const CREATE_STUDENT = `${API_URL}/auth/student-register`
export const GET_USER = `${API_URL}/auth/user`
export const VERIFY_BURSAR = `${API_URL}/auth/verify-bursar`
export const ADD_ROOM = `${API_URL}/admin/add_room`
export const GET_BOOKINGS = `${API_URL}/admin/get_bookings`
export const ADD_BURSAR = `${API_URL}/admin/add_bursar`
export const GET_BURSAR = `${API_URL}/admin/get_bursar`
export const ADMINDASHBOARD = `${API_URL}/admin/dashboard`
export const SEND_TO_BURSAR = id => `${API_URL}/admin/bursar/${id}`
export const SET_NOT_VERIFIED =(id: any)=> `${API_URL}/bursar/not_verified/${id}`
export const SET_VERIFIED =(id: any)=> `${API_URL}/bursar/verified/${id}`
export const GET_BURSAR_BOOKINGS = `${API_URL}/bursar/bookings`
export const BURSARDASHBOARD = `${API_URL}/bursar/dashboard`
export const BOOK_ROOM = `${API_URL}/student/book`
export const ALL_ROOMS = `${API_URL}/student/rooms`
export const GET_ALL_ROOMS = `${API_URL}/admin/rooms`
export const LATEST_ROOMS = `${API_URL}/student/latest`
export const STUDENT_BOOKING = `${API_URL}/student/booking`


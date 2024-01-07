import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-71f0.onrender.com"
})
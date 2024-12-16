import axios from "axios"

export const api = axios.create({
    baseURL: "http://52.146.80.24",
    timeout: 8000,
    headers: {
        "Content-Type": "application/json",
    },
})
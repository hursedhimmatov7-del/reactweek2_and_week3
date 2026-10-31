import axios from "axios"
import { api } from "./Api"

export async function LogAccess(obj) {
    try {
        let {data} = await axios.post(`${api}/auth/login` , obj)
        const token = data.token
        return token
    } catch (error) {
        console.log(error)
    }
}

export async function logCheck() {
  const token = localStorage.getItem('token')
  const { data } = await axios.get(`${api}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return data
}
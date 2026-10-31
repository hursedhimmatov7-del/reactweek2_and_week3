import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import axios from 'axios'
import { api } from '@/Api'

const UserId = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`${api}/users/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        setUser(data)
      } catch (error) {
        console.log(error.response?.data || error)
      } finally {
        setLoading(false)
      }
    }
    getUser()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (!user) return <p>User not found</p>

  return (
    <div className="flex flex-col items-start gap-4 p-5 border-2 border-gray-700 rounded-2xl">
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.role}</h1>
      <h1>{user.city}</h1>
      <Link to="/">Back</Link>
    </div>
  )
}

export default UserId
import React, { useEffect, useState } from "react"
import axios from "../api/axios"
import { useNavigate } from "react-router-dom"

const UserProfile = () => {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {

    const fetchUser = async () => {
      try {

        const token = localStorage.getItem("token")

        if (!token) {
          navigate("/auth")
          return
        }

        const res = await axios.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setUser(res.data)

      } catch (error) {
        console.log("Error fetching user:", error)
        navigate("/auth")
      }
    }

    fetchUser()

  }, [navigate])


  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/auth")
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-20">

      <div className="bg-white w-[600px] p-8 rounded-xl shadow-md">

        <div className="flex items-center gap-6">

          <img
            src=""
            className="w-20 h-20 rounded-full object-cover"
            alt="profile"
          />

          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>

        </div>

        <div className="mt-8 border-t pt-6">

          <p className="py-2 cursor-pointer hover:text-blue-500">
            My Orders
          </p>

          <p className="py-2 cursor-pointer hover:text-blue-500">
            Wishlist
          </p>

          <p className="py-2 cursor-pointer hover:text-blue-500">
            Edit Profile
          </p>

          <p
            onClick={handleLogout}
            className="py-2 cursor-pointer text-red-500"
          >
            Logout
          </p>

        </div>

      </div>

    </div>
  )
}

export default UserProfile
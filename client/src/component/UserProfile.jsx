import React from "react"

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-20">

      <div className="bg-white w-[600px] p-8 rounded-xl shadow-md">

        <div className="flex items-center gap-6">

          <img
            src="https://i.pravatar.cc/150"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold">Harshit</h2>
            <p className="text-gray-500">harshit@email.com</p>
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

          <p className="py-2 cursor-pointer text-red-500">
            Logout
          </p>

        </div>

      </div>

    </div>
  )
}

export default UserProfile
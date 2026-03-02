import { Search, Heart, ShoppingBag } from 'lucide-react';
import assets from '../assets/assets';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "../api/axios";


const ShopNavbar = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  fetchUser();
}, []);

  return (
    <div className='flex bg-[#eaf6f6]/50 backdrop-blur-md fixed w-full justify-between items-center py-3 px-2 md:px-5 mb-5 dark:text-white z-10 '>
      <div>
        <span className='font-bold text-xl sm:text-2xl md:text-3xl'>
          LIQUID
        </span>
      </div>

      <div className='flex-1 flex justify-center'>
        <input
          type='text'
          placeholder='Search'
          className="w-[150px] min-[410px]:w-[200px] sm:w-[300px] lg:w-[500px] border-2 rounded-4xl  pl-2 sm:pl-4 py-1 sm:py-2"
        />
      </div>

      <div className="flex justify-center items-center gap-3 md:gap-9">

        <div className="relative group">
          <Heart className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer hover:opacity-70 transition" />

          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap ">
            Wishlist
          </span>
        </div>


        <div className="relative group">

          <Link to='/cart'>

            <ShoppingBag className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer hover:opacity-70 transition" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap ">Cart </span>
          </Link>

        </div>

        <div className="relative flex items-center gap-2 group min-w-0">



          <p className="hidden md:block  text-lg font-semibold max-w-[120px] truncate">
            {user?.userName || "Account"}
          </p>

          <img
            src={assets.userPfp}
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
            alt="User profile"
          />

          <span className="absolute top-10 left-14 -translate-x-1/2 bg-gray-300 text-black   rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            <p className='py-2 px-10 hover:bg-gray-200'>My Profile</p>
            <p className='py-2 px-10 hover:bg-gray-200'>My Orders</p>
            <p className='py-2 px-10 hover:bg-gray-200'>Wishlist</p>
            <p className='py-2 px-10 hover:bg-gray-200'>Cart</p>
            <p className='py-2 px-10 hover:bg-gray-200'>Settings</p>
            <p className='py-2 px-10 hover:bg-gray-200'>Support</p>
            <p className='py-2 px-10 hover:bg-gray-200'>Logout</p>
          </span>

        </div>

      </div>
    </div>
  )
}

export default ShopNavbar

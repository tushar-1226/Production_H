import { Search, Heart, ShoppingBag } from 'lucide-react';
import assets from '../assets/assets';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";


const ShopNavbar = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {

    if (!searchTerm) {
      setResults([])
      return
    }

    const delay = setTimeout(async () => {
      try {
        const res = await axios.get(
          `/drink/search?query=${searchTerm}`
        )
        setResults(res.data)
      } catch (error) {
        console.error("Search error:", error)
      }
    }, 300) // 500ms delay

    return () => clearTimeout(delay)

  }, [searchTerm])

  const searchRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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

      <div ref={searchRef} className='flex-1 relative flex justify-center'>
        <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setShowDropdown(true)
          }}
          onFocus={() => setShowDropdown(true)}
          className="w-[150px] min-[410px]:w-[200px] sm:w-[300px] lg:w-[500px] border-2 rounded-4xl  pl-2 sm:pl-4 py-1 sm:py-2 focus:outline-2 focus:border-amber-800 "
        />
        {showDropdown && searchTerm && results.length > 0 && (
          <div className="w-[500px] max-h-[200px] overflow-y-auto z-[1000] border-2 border-black bg-[#eaf6f6] absolute rounded-xl top-12">
            {results.map((drink) => (
              <div key={drink._id}
                onClick={() => navigate(`/search/${drink._id}`)}
                className="p-2 cursor-pointer hover:bg-gray-100">
                {drink.name}
              </div>
            ))}
          </div>
        )}
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

          {/* <span className="absolute top-10 left-14 -translate-x-1/2 bg-gray-300 text-black   rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            <p className='py-2 px-10 hover:bg-gray-200 cursor-pointer'>My Profile</p>
            <p className='py-2 px-10 hover:bg-gray-200 cursor-pointer'>My Orders</p>
            <p className='py-2 px-10 hover:bg-gray-200 cursor-pointer'>Wishlist</p>
            <p className='py-2 px-10 hover:bg-gray-200 cursor-pointer'>Cart</p>
            <p className='py-2 px-10 hover:bg-gray-200 cursor-pointer'>Settings</p>
            <p className='py-2 px-10 hover:bg-gray-200 cursor-pointer'>Support</p>
            <p className='py-2 px-10 hover:bg-gray-200 cursor-pointer'>Logout</p>
          </span> */}

        </div>

      </div>
    </div>
  )
}

export default ShopNavbar

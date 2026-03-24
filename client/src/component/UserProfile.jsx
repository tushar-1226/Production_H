import React, { useEffect, useState } from "react"
import axios from "../api/axios"
import { useNavigate } from "react-router-dom"
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import Loader from './Loader'

const UserProfile = ({ theme, setTheme }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
    const [orders, setOrders] = useState([])
    const [wishlist, setWishlist] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) {
                    navigate('/auth', { replace: true })
                    return
                }
                const res = await axios.get('/auth/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setUser(res.data)
                // placeholder fetches for orders/wishlist
                setOrders(res.data.orders || [])
                setWishlist(res.data.wishlist || [])
            } catch (err) {
                console.error('Error fetching user:', err)
                navigate('/auth', { replace: true })
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/auth', { replace: true })
    }

    const handleOpenEdit = () => setShowEditModal(true)
    const handleCloseEdit = () => setShowEditModal(false)

    const handleSaveProfile = async (updated) => {
        try {
            const token = localStorage.getItem('token')
            setUser(prev => ({ ...prev, ...updated }))
            if (token) {
                await axios.put('/auth/profile', updated, { headers: { Authorization: `Bearer ${token}` } })
            }
            handleCloseEdit()
        } catch (err) {
            console.error('Failed to save profile', err)
        }
    }

    if (loading) return <Loader />

    return (
        <div className="h-screen w-screen  dark:bg-[#0A0A0B]/30 dark:text-white flex">
            <aside className="w-full md:w-1/3 lg:w-1/4 dark:bg-[#0A0A0B]/30 dark:text-white p-6 border-r flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <img src={user?.profilePic || assets.profileicon} alt="profile" className="w-20 h-20 rounded-full object-cover shadow" />
                    <div>
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <button onClick={handleOpenEdit} className="text-left px-3 py-2 rounded hover:bg-gray-100">Edit profile</button>
                    <button onClick={() => window.scrollTo({ top: 9999, behavior: 'smooth' })} className="text-left px-3 py-2 rounded hover:bg-gray-100">My Orders ({orders.length})</button>
                    <button onClick={() => window.scrollTo({ top: 9999, behavior: 'smooth' })} className="text-left px-3 py-2 rounded hover:bg-gray-100">Wishlist ({wishlist.length})</button>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                    <button onClick={() => setShowLogoutConfirm(true)} className="text-red-600 px-3 py-2 rounded hover:bg-red-50">Logout</button>
                </div>
            </aside>

            <main className="flex-1 p-6 overflow-auto">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">
                        Welcome back, {user?.name?.split(' ')[0] || "User"}
                    </h1>
                    <div className="text-sm text-gray-500">Member since {new Date(user.createdAt || Date.now()).toLocaleDateString()}</div>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-white  dark:bg-[#0A0A0B]/30 dark:text-white dark:border-2 rounded shadow-sm">
                        <h3 className="font-medium mb-2">Profile Summary</h3>
                        <p className="text-sm text-gray-600">Name: {user.name}</p>
                        <p className="text-sm text-gray-600">Email: {user.email}</p>
                        <p className="text-sm text-gray-600">Phone: {user.phone || '—'}</p>
                    </div>

                    <div className="p-4 bg-white  dark:bg-[#0A0A0B]/30 dark:text-white dark:border-2 rounded shadow-sm">
                        <h3 className="font-medium mb-2">Quick Stats</h3>
                        <div className="flex gap-4">
                            <div className="flex-1 text-center ">
                                <div className="text-lg font-semibold">{orders.length}</div>
                                <div className="text-sm text-gray-500">Orders</div>
                            </div>
                            <div className="flex-1 text-center">
                                <div className="text-lg font-semibold">{wishlist.length}</div>
                                <div className="text-sm text-gray-500">Wishlist</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="bg-white  dark:bg-[#0A0A0B]/30 dark:text-white dark:border-2 p-4 rounded shadow-sm">
                        <h3 className="font-medium mb-3">My Orders</h3>
                        {orders.length === 0 ? (
                            <p className="text-sm text-gray-500">No orders yet.</p>
                        ) : (
                            orders.map((o, i) => (
                                <div key={i} className="flex items-center justify-between py-2 border-b last:border-b-0">
                                    <div>
                                        <div className="font-medium">{o.title}</div>
                                        <div className="text-xs text-gray-500">{o.date}</div>
                                    </div>
                                    <div className="font-medium">${o.total}</div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="bg-white  dark:bg-[#0A0A0B]/30 dark:text-white dark:border-2 p-4 rounded shadow-sm">
                        <h3 className="font-medium mb-3">Wishlist</h3>
                        {wishlist.length === 0 ? (
                            <p className="text-sm text-gray-500">Your wishlist is empty.</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {wishlist.map((w, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 border rounded">
                                        <img src={w.image || assets.profileicon} alt="item" className="w-12 h-12 object-cover rounded" />
                                        <div>
                                            <div className="font-medium">{w.name}</div>
                                            <div className="text-xs text-gray-500">{w.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            {showEditModal && <EditProfileModal user={user} onClose={handleCloseEdit} onSave={handleSaveProfile} />}
            {showLogoutConfirm && <ConfirmModal onCancel={() => setShowLogoutConfirm(false)} onConfirm={handleLogout} />}
        </div>
    )
}

function EditProfileModal({ user, onClose, onSave }) {
    const [form, setForm] = useState({ name: user.name || '', email: user.email || '', profilePic: user.profilePic || '' })
    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded">
                <h3 className="text-lg font-semibold">Edit Profile</h3>
                <div className="mt-4 space-y-3">
                    <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Name" />
                    <input name="email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Email" />
                    <input name="profilePic" value={form.profilePic} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Profile picture URL" />
                </div>
                <div className="mt-4 flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 rounded">Cancel</button>
                    <button onClick={() => onSave(form)} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
                </div>
            </div>
        </div>
    )
}

function ConfirmModal({ onCancel, onConfirm }) {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-sm p-6 rounded">
                <h3 className="text-lg font-semibold">Confirm logout</h3>
                <p className="mt-2 text-gray-600">Are you sure you want to logout?</p>
                <div className="mt-4 flex justify-end gap-2">
                    <button onClick={onCancel} className="px-4 py-2 rounded">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
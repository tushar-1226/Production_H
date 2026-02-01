import React, { useState } from 'react'
import { Instagram, Twitter, Youtube, Mail, Phone, Linkedin } from 'lucide-react'

const Footer = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email.'
    if (!form.message.trim()) errs.message = 'Message cannot be empty.'
    return errs
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess('')
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) {
      // in a real app you'd POST to an API here
      setSuccess("Thanks — we'll be in touch soon!")
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <footer className="bg-[#0A0A0B] text-gray-200 py-12" id='contact'>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="liquid text-2xl md:text-3xl mb-2">Get in Contact</h3>
            <p className="text-sm max-w-sm mb-4">
              We craft smooth, natural experiences — your feedback helps us refine everything we build.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-sm hover:bg-gray-800">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-sm hover:bg-gray-800">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Youtube" className="p-2 rounded-sm hover:bg-gray-800">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="text-sm">
            <div className="flex gap-10">
              <div>
                <h4 className="font-medium mb-2 text-lg">Explore</h4>
                <ul className="space-y-1">
                  <li><a href="#shop" className="hover:underline">Shop</a></li>
                  <li><a href="#about_us" className="hover:underline">About us</a></li>
                  <li><a href="#flavours" className="hover:underline">Flavours</a></li>
                  <li><a href="#learn" className="hover:underline">Learn</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-lg">Support</h4>
                <ul className="space-y-1">
                  <li><a href="#faq" className="hover:underline">FAQ</a></li>
                  <li><a href="#contact" className="hover:underline">Contact</a></li>
                  <li><a href="#our_story" className="hover:underline">Our story</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div>
            <h4 className="font-medium mb-2">Contact us</h4>
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-2">
                <label className="sr-only" htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="p-2 bg-[#0F0F10] border border-gray-800 rounded text-sm"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <div id="name-error" className="text-xs text-red-400">{errors.name}</div>}

                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="p-2 bg-[#0F0F10] border border-gray-800 rounded text-sm"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <div id="email-error" className="text-xs text-red-400">{errors.email}</div>}

                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="p-2 bg-[#0F0F10] border border-gray-800 rounded text-sm resize-none"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <div id="message-error" className="text-xs text-red-400">{errors.message}</div>}

                <button type="submit" className="mt-2 bg-white text-black rounded-sm py-2 text-sm">
                  Send message
                </button>

                {success && <div className="mt-2 text-sm text-green-400">{success}</div>}
              </div>
            </form>

            <div className="mt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} /> <a href="mailto:hello@liquid.example" className="hover:underline">hello@liquid.example</a>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Phone size={16} /> <a href="tel:+123456789" className="hover:underline">+1 (234) 567-89</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-800 mt-8" />

        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-400">
          <div>© {new Date().getFullYear()} LIQUID — All rights reserved.</div>
          <div className="mt-2 md:mt-0">Made with care by harshit </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

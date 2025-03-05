import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Code<span className="text-blue-400">&</span>Craft</h3>
          <p className="text-gray-400">
            Creating beautiful digital experiences for businesses of all sizes.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link className="hover:text-blue-400 transition-colors">Web Design</Link></li>
            <li><Link className="hover:text-blue-400 transition-colors">Web Development</Link></li>
            <li><Link className="hover:text-blue-400 transition-colors">Maintenance & Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to='/' onClick={() => setActiveSection('home')} className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to='/services' onClick={() => setActiveSection('services')} className="hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link to='/portfolio' onClick={() => setActiveSection('portfolio')} className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
            <li><Link to='/contact' onClick={() => setActiveSection('contact')} className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for web development tips and updates.</p>
          <div className="flex border-2 border-blue-600 rounded-[10px]">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full"
            />
            <Link className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
              →
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Code&Craft. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
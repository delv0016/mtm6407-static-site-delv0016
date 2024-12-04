import React from "react"
const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full max-w-4xl px-4 mt-16 mb-16">
      <nav className="flex space-x-8">
        <a href="/" className="text-gray-600 hover:text-gray-800">
          Work
        </a>
        <a href="/about" className="text-gray-600 hover:text-gray-800">
          About
        </a>
        <a href="/contact" className="text-gray-800 font-medium">
          Contact
        </a>
      </nav>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer

import React from "react";
const Navlink = () => {
  return (
    <nav className="mt-8">
      <ul className="flex space-x-8 justify-center text-gray-600">
        <li>
          <a href="/" className="hover:text-gray-900">
            Work
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-900">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-900">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navlink;

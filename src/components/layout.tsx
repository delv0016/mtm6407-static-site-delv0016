import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout

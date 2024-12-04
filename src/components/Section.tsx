import React from "react"

const Section = ({ title, children }) => (
  <section className="mt-16 mx-automax-w-4xl mx-auto p-8  text-left">
    <h2 className="text-3xl font-bold text-gray-800 font-playfair mt-12 mb-3">
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed mt-4">{children}</div>
  </section>
)

export default Section

import React from "react"
import Layout from "../components/layout"
const Contact = () => {
  return (
    <Layout>
      <main className="w-full max-w-7xl px-4  mt-16">
        <section className="mb-16 w-full max-w-full px-4">
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:ml-36">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Email me!
              </h2>
              <p className="text-gray-600 mb-8">
                If you'd like to reach out, please send me an email.
              </p>
            </div>
            <div className="md:w-1/2">
              <form className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-600 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    type="email"
                    id="email"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    type="text"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    id="message"
                    rows={6}
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button
                  className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                  type="submit"
                >
                  Send email
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Contact

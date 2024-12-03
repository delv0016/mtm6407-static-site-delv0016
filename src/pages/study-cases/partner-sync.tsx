import React from "react"
import { useState } from "react"

const PartnerSync = () => {
  const graphicsImages = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ]

  const wireframesImages = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ]

  const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
      const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1
      setCurrentIndex(index)
    }

    const nextSlide = () => {
      const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1
      setCurrentIndex(index)
    }

    return (
      <div className="relative w-full max-w-4xl mx-auto mt-8">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    )
  }

  const Section = ({ title, children }) => (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <div className="text-gray-700 leading-relaxed mt-4">{children}</div>
    </section>
  )

  const Header = () => (
    <header className="bg-yellow-300 py-8">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">PartnerSync</div>
        <div className="space-x-8">
          <a href="#" className="text-gray-700">
            Work
          </a>
          <a href="#" className="text-gray-700">
            About
          </a>
          <a href="#" className="text-gray-700">
            Contact
          </a>
        </div>
      </nav>
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800">PartnerSync</h1>
          <p className="text-xl text-gray-600 mt-4">
            Sync and Connect Partners with Ease
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/600x400"
            alt="Laptop illustration"
            className="mx-auto mt-8 md:mt-0"
          />
        </div>
      </div>
    </header>
  )
  return (
    <main className="container mx-auto py-16 bg-gray-100">
      <Header />
      <Section title="My role(s)">
        <p>
          As a UX/UI designer, my role was to design the user interface and user
          experience for PartnerSync. This involved conducting user research,
          creating wireframes and prototypes, and working closely with the
          development team to ensure the final product met the needs of the
          users.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Research</li>
          <li>Design</li>
          <li>Prototyping</li>
          <li>Testing</li>
        </ul>
      </Section>
      <Section title="Background">
        <p>
          PartnerSync was created to address the need for a more streamlined and
          efficient way to manage partner relationships. The goal was to create
          a tool that would make it easier for companies to track and manage
          their partner interactions, agreements, and performance metrics.
        </p>
      </Section>
      <Section title="Target Audience">
        <p>
          PartnerSync is designed for companies of all sizes that need to manage
          their partner relationships more effectively. Whether you're a small
          business with a few partners or a large enterprise with a complex
          network of partners, PartnerSync can help you stay organized and on
          top of your partner relationships.
        </p>
        <img
          src="https://placehold.co/600x400"
          alt="Target audience illustration"
          className="mx-auto mt-8"
        />
      </Section>
      <Section title="Graphics">
        <Carousel images={graphicsImages} />
      </Section>
      <Section title="Low Fidelity & High Fidelity Wireframes">
        <Carousel images={wireframesImages} />
      </Section>
      <Section title="Coding part">
        <p>
          In the coding part, I worked closely with the development team to
          ensure that the final product met the needs of the users. This
          involved creating detailed specifications and working with the
          developers to implement the design.
        </p>
      </Section>
      <Section title="The End!">
        <img
          src="https://placehold.co/600x400"
          alt="Final product illustration"
          className="mx-auto mt-8"
        />
      </Section>
      <Section title="Read more of my case studies">
        <div className="flex justify-center space-x-8 mt-8">
          <div>
            <img
              src="https://placehold.co/200x150"
              alt="Case study 1"
              className="mx-auto"
            />
            <div className="text-gray-700 mt-4">The other side</div>
          </div>
          <div>
            <img
              src="https://placehold.co/200x150"
              alt="Case study 2"
              className="mx-auto"
            />
            <div className="text-gray-700 mt-4">Code</div>
          </div>
        </div>
      </Section>
      <Section title="Let's connect!">
        <p>
          For business inquiries or just to say hello, feel free to reach out to
          me.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-gray-700">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-700">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-700">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-700">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </Section>
    </main>
  )
}

export default PartnerSync

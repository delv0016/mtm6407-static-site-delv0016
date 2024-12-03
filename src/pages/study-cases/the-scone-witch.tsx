import React from "react"
import { useState } from "react"
import Layout from "../../components/layout"

const TheSconeWitch = () => {
  const Hero = () => (
    <section className="flex flex-col md:flex-row items-center text-center md:text-left py-12 bg-[#E6E1F0] md:py-24">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl text-[#2E2E2E] font-playfair">
          The Scone Witch
        </h1>
        <p className="text-xl text-[#2E2E2E] mt-4">
          Redesigning a local bistro's website
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="https://placehold.co/600x400"
          alt="Laptop displaying The Scone Witch website"
        />
      </div>
    </section>
  )

  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = [
      "https://placehold.co/300x600?text=Image+1",
      "https://placehold.co/300x600?text=Image+2",
      "https://placehold.co/300x600?text=Image+3",
    ]

    const prevSlide = () => {
      setCurrentIndex(
        prevIndex => (prevIndex - 1 + images.length) % images.length
      )
    }

    const nextSlide = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }

    return (
      <div className="relative w-full max-w-md mx-auto mt-4">
        <img
          src={images[currentIndex]}
          alt={`High fidelity wireframe ${currentIndex + 1}`}
          className="w-full rounded-lg shadow-lg"
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

  const Content = () => (
    <section className="max-w-4xl mx-auto p-8 bg-[#E6E1F0] text-left">
      <p className="text-lg leading-relaxed">
        This project was about designing a new and refreshing digital presence
        for The Scone Witch, a popular bakery in town. The aim was to bring a
        modern touch to their online presence.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        As part of a team of 4 designers, I took charge of the wireframes and
        the overall design direction. My role was crucial in ensuring that the
        website was not only visually appealing but also user-friendly and
        accessible.
      </p>
      <h2 className="text-2xl font-playfair mt-12">My role(s)</h2>
      <p className="text-lg leading-relaxed">
        In this project, being part of Team Scone Witch, I was responsible for
        creating wireframes and high-fidelity user interface designs, while
        collaborating and guiding the development team in building a responsive
        and user-friendly website. My tasks included:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>Wireframes</li>
        <li>UI Design</li>
        <li>Prototyping</li>
        <li>Testing</li>
        <li>Story</li>
      </ul>
      <h2 className="text-2xl font-playfair mt-12">Objectives</h2>
      <p className="text-lg leading-relaxed">
        The main objectives of the redesign were to:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>Enhance the user experience</li>
        <li>Improve the visual appeal</li>
        <li>Ensure mobile responsiveness</li>
        <li>Highlight the brand's story</li>
      </ul>
      <div className="flex justify-between items-center mt-12">
        <div className="text-center">
          <div className="text-2xl">1</div>
          <div>Define</div>
        </div>
        <div className="h-px bg-[#2E2E2E] w-1/2"></div>
        <div className="text-center">
          <div className="text-2xl">2</div>
          <div>Design</div>
        </div>
      </div>
      <h2 className="text-2xl font-playfair mt-12">Background</h2>
      <p className="text-lg leading-relaxed">
        The Scone Witch is a popular bakery known for its delicious scones and
        friendly atmosphere. The redesign aimed to reflect the brand's unique
        charm and attract more customers through a modern and user-friendly
        website.
      </p>
      <h2 className="text-2xl font-playfair mt-12">Target Audience</h2>
      <ul className="list-disc list-inside mt-4">
        <li>
          Primary: Ages 25-45, interested in gourmet baked goods, looking for a
          cozy and friendly place to enjoy a meal
        </li>
        <li>
          Secondary: Local residents and tourists looking for a unique dining
          experience
        </li>
        <li>Other: Foodies and culinary enthusiasts</li>
      </ul>
      <h2 className="text-2xl font-playfair mt-12">New Logo</h2>
      <img
        src="https://placehold.co/200x200"
        alt="The Scone Witch logo"
        className="mx-auto mt-4"
      />
      <h2 className="text-2xl font-playfair mt-12">Low Fidelity Wireframes</h2>
      <img
        src="https://placehold.co/600x400"
        alt="Low fidelity wireframes of The Scone Witch website"
        className="mx-auto mt-4"
      />
      <h2 className="text-2xl font-playfair mt-12">High Fidelity Wireframes</h2>
      <Carousel />
    </section>
  )

  return (
    <Layout>
      <main>
        <Hero />
        <Content />
      </main>
    </Layout>
  )
}

export default TheSconeWitch

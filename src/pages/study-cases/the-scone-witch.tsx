import React from "react";
import { useState } from "react";
import Layout from "../../components/layout";
import Carousel from "../../components/Carousel";
import Section from "../../components/Section";
import { StaticImage } from "gatsby-plugin-image"

const TheSconeWitch = () => {
  const images = [
   "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/67420146113cf40002d647c3/c3EjirUnOB60vAj3.png",
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/67420146113cf40002d647c3/gzakuW2WmSZiZx5Q.png",
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/67420146113cf40002d647c3/3bOVZeYUphYJPzrv.png",
  ];
  const Hero = () => (
    <div className=" py-8">
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800">The Scone Witch</h1>
          <p className="text-xl text-gray-600 mt-4">
          Redesigning a local bistro's website
          </p>
        </div>
        <div className="text-center">
        <StaticImage
          src="../../images/sconewitchthumbnail.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Pa"
          height={400}
        />
        </div>
      </div>
    </div>
  );

  const Content = () => (
    <section className="max-w-4xl mx-auto p-8 text-left">
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
      <Section title="My role(s)">
      
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
      </Section>
      <Section title="Objectives">
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
      </Section>
      <Section title="Background">
      <p className="text-lg leading-relaxed">
        The Scone Witch is a popular bakery known for its delicious scones and
        friendly atmosphere. The redesign aimed to reflect the brand's unique
        charm and attract more customers through a modern and user-friendly
        website.
      </p>
      </Section>
      <Section title="Target Audience">
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
      </Section>
      <Section title="New Logo">
      <StaticImage
          src="../../images/logotsw.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Logo of The Scone Witch"
          height={500}
        />
      </Section>
      <Section title="Low Fidelity Wireframes">
      <StaticImage
          src="../../images/tsw-lofi.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Low fidelity wireframes of The Scone Witch"
        />
      </Section>
  
      <Section title="High Fidelity Wireframes">
      <Carousel images={images}/>
      </Section>
    </section>
  );

  return (
    <Layout>
    <main className="container mx-auto py-16">
      <Hero />
      <Content />
    </main>
    </Layout>
  );
};

export default TheSconeWitch;

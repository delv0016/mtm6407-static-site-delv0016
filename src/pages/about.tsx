import React from "react";
import Layout from "../components/layout";
const About = () => {
  return (
  <Layout>
    <main className="mt-16 max-w-4xl mx-auto">
      <section className="flex flex-col md:flex-row items-center mt-16 max-w-4xl mx-auto">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-gray-800">About me</h2>
          <p className="text-gray-600 mt-4">
            I'm Lia, an almost-graduate in{" "}
            <span className="font-bold">Interactive Media Design</span>. I enjoy
            creating intuitive and accessible digital experiences. I love
            working in <span className="font-bold">Adobe Creative Cloud</span>,
            where I flex my creative muscles and bring my ideas to life. From
            problem-solving to finding innovative design solutions, I enjoy
            every part of the process—especially when it means working closely
            with a team to make something special for the user.
          </p>
          <p className="text-gray-600 mt-4">
            Think of me as someone who blends creativity with a user-first
            mindset. I'm all about designing products that don't just look great
            but are genuinely useful and easy to navigate. Whether it's
            transitioning new concepts or refining the user journey, I'm here to
            make sure every interaction is seamless and enjoyable.{" "}
            <span className="text-lg">😊</span>
          </p>
        </div>
        <div className="md:w-1/2 p-4 flex flex-col items-center">
          <img
            src="https://placehold.co/400x400"
            alt="Portrait of Lia"
            className="rounded-lg shadow-lg"
          />
          <p className="text-center text-gray-600 mt-2">Hi! This is me</p>
        </div>
      </section>
      <section className="mt-16 flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2 p-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Tools</h2>
          <p className="text-gray-600 mt-4">
            Adobe Creative Cloud (InDesign, Illustrator, Premiere, Audition,
            Photoshop, Lightroom, XD)
          </p>
          <p className="text-gray-600 mt-4">Adobe Captivate</p>
          <p className="text-gray-600 mt-4">Figma</p>
          <p className="text-gray-600 mt-4">Maze</p>
          <p className="text-gray-600 mt-4">Javascript</p>
          <p className="text-gray-600 mt-4">React</p>
        </div>
        <div className="md:w-1/2 p-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800">UX SkillSet</h2>
          <p className="text-gray-600 mt-4">Branding</p>
          <p className="text-gray-600 mt-4">User Research</p>
          <p className="text-gray-600 mt-4">Wireframe</p>
          <p className="text-gray-600 mt-4">Interactive Prototypes</p>
          <p className="text-gray-600 mt-4">User Testing</p>
        </div>
      </section>
    </main>
    </Layout>
  );
};

export default About;

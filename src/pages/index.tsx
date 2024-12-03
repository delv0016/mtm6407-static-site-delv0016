import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";


const Work = () => {
  return (
    <Layout>
    <main className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/study-cases/partner-sync">
          <div className="bg-yellow-200 p-8 rounded-lg flex justify-center items-center">
            <img
              src="https://placehold.co/600x400"
              alt="Laptop displaying a website with illustrations of people"
              className="max-w-full h-auto"
            />
          </div>
          </Link>
          <Link to="/study-cases/the-scone-witch">
        <div className="bg-purple-200 p-8 rounded-lg flex justify-center items-center">
          <img
            src="https://placehold.co/600x400"
            alt="Desktop and mobile phone displaying a website for The Scone Witch"
            className="max-w-full h-auto"
          />
        </div>
        </Link>
      </div>
    </main>
    </Layout>
  );
};

export default Work;

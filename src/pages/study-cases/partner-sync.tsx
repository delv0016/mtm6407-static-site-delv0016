import React from "react"
import { useState } from "react"
import Layout from "../../components/layout"
import Carousel from "../../components/Carousel"
import Section from "../../components/Section"
import { StaticImage } from "gatsby-plugin-image"

const PartnerSync = () => {
  const graphicsImages = [
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/6742013f113cf40002d620a1/lqHbxyICspkt4wuu.png",
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/6742013f113cf40002d620a1/7cfx3clcKGNpvTnh.png",
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/6742013f113cf40002d620a1/vdbzkyEOB5veQIiB.png",
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/6742013f113cf40002d620a1/QpdNaFohj2mqGgOm.png",
  ]

  const wireframesImages = [
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/6742013f113cf40002d620a1/O1eujEjMIQWu8SVC.jpg",
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/6742013f113cf40002d620a1/SFwPUhEWlGdONTI7.png",
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/6742013f113cf40002d620a1/M84699mske4Q1gz3.png",
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/6742013f113cf40002d620a1/KfSLLSPnLcWKrsu8.jpg",
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/6742013f113cf40002d620a1/dyLzqRvr9miBlU0Z.jpg",
    "https://storage.googleapis.com/uxfolio/6701a9282f57330002c08e1c/6742013f113cf40002d620a1/noDwMaxhcPtNOqIp.jpg",
  ]

  const Content = () => (
    <section className="max-w-4xl mx-auto p-8 text-left">
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
        <StaticImage
          src="../../images/sitemap.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Target audience illustration"
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
        <StaticImage
          src="../../images/applied-research-poster.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Pa"
        />
      </Section>
    </section>
  )

  const Hero = () => (
    <div className=" py-8">
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800">PartnerSync</h1>
          <p className="text-xl text-gray-600 mt-4">
            Sync and Connect Partners with Ease
          </p>
        </div>
        <div className="text-center">
        <StaticImage
          src="../../images/partnersyncthumbnail.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Pa"
          width={500}
          height={400}
        />
        </div>
      </div>
    </div>
  )

  return (
    <Layout>
      <main className="container mx-auto py-16 ">
        <Hero />
        <Content />
      </main>
    </Layout>
  )
}

export default PartnerSync

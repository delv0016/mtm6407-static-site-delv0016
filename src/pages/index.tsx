import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Work = () => {
  return (
    <Layout>
      <main className="mt-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-3">
          <Link to="/study-cases/partner-sync">
            <div className="bg-yellow-200 p-8 rounded-lg flex justify-center items-center">
              <StaticImage
                src="../images/partnersyncthumbnail.png"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Pa"
                height={250}
              />
            </div>
          </Link>
          <Link to="/study-cases/the-scone-witch">
            <div className="bg-purple-200 p-8 rounded-lg flex justify-center items-center">
            <StaticImage
                src="../images/sconewitchthumbnail.png"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Pa"
                height={250}
              />
            </div>
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Work

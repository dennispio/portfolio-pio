import React from 'react'
import { Link } from 'gatsby'
import './bio.scss'

const Bio = (): JSX.Element => {
  return (
    <div className="container">
      <div className="mitte">
        <div className="paragraph-block fade-in-mitte ">
          <p className="text-lg">
            HEY! MY NAME IS DENNIS. I'M A FULL STACK DEVELOPER BASED IN HANNOVER. I'M A HUGE ENTUSIAST OF NEW TECH
            ALWAYS LOOKING FOR A NEW OPPORTUNITY TO SHAPE MY SKILLS AND MY KNOWLEDGE. I ALWAYS LOVE TO WORK WITH NEW
            TECHNOLOGIES LOREM IPSUM LOREM IPSUM.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-no-wrap fade-in-unten">
        <div className="flex-direction w-1/2 md:w-1/4">
          <div className="p-1 text-lg text-grey1 typewriter-text">FRONTEND</div>
          <div className="p-1 text-sm">JAVASCRIPT</div>
          <div className="p-1 text-sm ">TYPESCRIPT</div>
          <div className="p-1 text-sm">REACTJS</div>
          <div className="p-1 text-sm">GATSBYJS</div>
        </div>
        <div className="flex-direction w-1/2 md:w-1/4">
          <div className="p-1 text-lg text-grey1">BACKEND</div>
          <div className="p-1 text-sm">JAVA</div>
          <div className="p-1 text-sm">NODEJS</div>
          <div className="p-1 text-sm ">EXPRESSJS</div>
        </div>
        <div className="flex-direction w-1/2 md:w-1/4">
          <div className="p-1 text-lg text-grey1">WEITERES</div>
          <div className="p-1 text-sm">SCRUM</div>
          <div className="p-1 text-sm">USABILITY</div>
          <div className="p-1 text-sm">UX DESIGN</div>
        </div>
        <div className="flex-direction w-1/2 md:w-1/4">
          <div className="p-1  text-lg text-grey1">MARKETING</div>
          <div className="p-1  text-sm">ONPAGE SEO</div>
          <div className="p-1  text-sm">OFFPAGE SEO</div>
          <div className="p-1  text-sm">CONTENT MARKETING</div>
        </div>
      </div>
    </div>
  )
}

export default Bio

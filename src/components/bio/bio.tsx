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
            TECHNOLOGIES LOREM IPSUM LOREM IPSUM
          </p>
        </div>
      </div>
      <div className="flex fade-in-unten">
        <div className="flex-direction breite">
          <div className="skill-items text-lg text-grey1 typewriter-text">FRONTEND</div>
          <div className="skill-items  text-sm">JAVASCRIPT</div>
          <div className="skill-items  text-sm ">TYPESCRIPT</div>
          <div className="skill-items  text-sm">REACTJS</div>
          <div className="skill-items  text-sm">GATSBYJS</div>
        </div>
        <div className="flex-direction breite">
          <div className="skill-items text-lg text-grey1">BACKEND</div>
          <div className="skill-items text-sm">JAVA</div>
          <div className="skill-items  text-sm">NODEJS</div>
          <div className="skill-items  text-sm ">EXPRESSJS</div>
        </div>
        <div className="flex-direction breite">
          <div className="skill-items text-lg text-grey1">WEITERES</div>
          <div className="skill-items text-sm">SCRUM</div>
          <div className="skill-items text-sm">USABILITY</div>
          <div className="skill-items text-sm">UX DESIGN</div>
        </div>
        <div className="flex-direction breite">
          <div className="skill-items text-lg text-grey1">MARKETING</div>
          <div className="skill-items  text-sm">ONPAGE SEO</div>
          <div className="skill-items  text-sm">OFFPAGE SEO</div>
          <div className="skill-items  text-sm">CONTENT MARKETING</div>
        </div>
      </div>
    </div>
  )
}

export default Bio

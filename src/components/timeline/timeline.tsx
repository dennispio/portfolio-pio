import React from 'react'
import './timeline.scss'

interface TimelineProps {
  timelineData: {
    timelinetext1: string
    timelinetext2: string
    timelinetext3: string
    timelinetext4: string
    timelinetext5: string
  }
}

const Timeline = ({ timelineData }: TimelineProps): JSX.Element => {
  return (
    <div className="container">
      <h3 className="text-xl mb-10 md:mb-20 ">TIMELINE</h3>
      <div>
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/5">
            <span className=" md:text-lg md:text-white text-xs text-grey1">2018 - TODAY</span>
          </div>
          <div className="flex flex-col md:w-3/4">
            <p className="text-lg">
              FREELANCER AS <br />
              FULLSTACK DEVELOPER
            </p>
            <div className="hover-fadein">
              <span className="text-xs text-grey1">FEATURE</span>
              <div className="flex flex-wrap text-xs ">
                <span className="pr-5">FRONTEND</span>
                <span className="pr-5">BACKEND</span>
                <span className="pr-5">APP</span>
                <span className="pr-5">SEO</span>
              </div>
              <div className="text-sm pt-10 pb-10 uppercase">
                <p>{timelineData.timelinetext1}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/5">
            <span className="md:text-lg md:text-white text-xs text-grey1">2018 - TODAY</span>
          </div>
          <div className="flex flex-col md:w-3/4">
            <p className="text-lg">
              CO - FOUNDER STREETWEAR <br />
              IMMAJUNG
            </p>
            <div className="hover-fadein">
              <span className="text-xs text-grey1">FEATURE</span>
              <div className="flex flex-wrap text-xs ">
                <span className="pr-5">STREETWEAR</span>
                <span className="pr-5">DEVELOPEMENT</span>
                <span className="pr-5">BRANDING</span>
                <span className="pr-5">MARKETING</span>
              </div>
              <div className="text-sm pt-10 pb-10 uppercase">
                <p>{timelineData.timelinetext3}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/5">
            <span className=" md:text-lg md:text-white text-xs text-grey1">2018 - 2020</span>
          </div>
          <div className="flex flex-col md:w-3/4">
            <p className="text-lg">
              MASTER DEGREE <br />
              COMPUTER SCIENCE AND ECONOMICS <br />
              UNIVERSITY OF HILDESHEIM
            </p>
            <div className="hover-fadein">
              <span className="text-xs text-grey1">FEATURE</span>
              <div className="flex flex-wrap text-xs ">
                <span className="pr-5">MYCBR</span>
                <span className="pr-5">REACT</span>
                <span className="pr-5">APACHE TOM CAT</span>
                <span className="pr-5">SPRING</span>
                <span className="pr-5">CSS</span>
              </div>
              <div className="text-sm pt-10 pb-10 uppercase">
                <p>{timelineData.timelinetext2}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/5">
            <span className="md:text-lg md:text-white text-xs text-grey1">2018 - 2019</span>
          </div>

          <div className="flex flex-col md:w-3/4">
            <p className="text-lg">
              DESIGN AND DEVELOPER <br />
              CONTINENTAL AG
            </p>
            <div className="hover-fadein">
              <span className="text-xs text-grey1">FEATURE</span>
              <div className="flex flex-wrap text-xs ">
                <span className="pr-5">HTML</span>
                <span className="pr-5">CSS</span>
                <span className="pr-5">JAVASCRIPT</span>
                <span className="pr-5">CMS</span>
              </div>
              <div className="text-sm pt-10 pb-10 uppercase">
                <p>{timelineData.timelinetext4}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/5">
            <span className="md:text-lg md:text-white text-xs text-grey1">2013 - 2017</span>
          </div>
          <div className="flex flex-col md:w-3/4">
            <p className="text-lg">
              BACHELOR DEGREE <br />
              INFORMATIONMANAGEMENT AND INFORMATIONSTECHNOLOGIE <br />
              UNIVERSITY OF HILDESHEIM
            </p>
            <div className="hover-fadein">
              <span className="text-xs text-grey1">FEATURE</span>
              <div className="flex flex-wrap text-xs ">
                <span className="pr-5">SCRUM</span>
                <span className="pr-5">JAVA</span>
                <span className="pr-5">C++</span>
                <span className="pr-5">SQL</span>
              </div>
              <div className="text-sm pt-10 pb-10 uppercase">
                <p>{timelineData.timelinetext5}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline

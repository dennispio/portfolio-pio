import React from 'react'
import './timeline.scss'

const Timeline = (): JSX.Element => {
  return (
    <div className="container">
      <h3 className="text-xl mb-20 ">TIMELINE</h3>
      <div>
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/4">
            <span className="text-lg">2013 - 2017</span>
          </div>
          <div className="md:w-1/12" />
          <div className="flex flex-col">
            <p className="text-lg">
              BACHELOR DEGREE <br />
              INFORMATIONMANAGEMENT AND INFORMATIONSTECHNOLOGIE <br />
              UNIVERSITY OF HILDESHEIM
            </p>
            <div className="">
              <span className="text-xs text-grey1">FEATURE</span>
              <div className="flex flex-wrap text-xs ">
                <span className="pr-5">SCRUM</span>
                <span className="pr-5">JAVA</span>
                <span className="pr-5">C++</span>
                <span className="pr-5">SQL</span>
              </div>
              <div className="text-sm pt-10 pb-10 w-3/4">
                <p>
                  Some friends of mine and me started an own agency with the focus on coding. We are four full stack
                  developers trying to step into freelancing and gain some momentum with our own site. Unfortunately the
                  site is under construction right now. The relaunch will happen soon.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/4">
            <span className="text-lg">2018 - 2019</span>
          </div>
          <div className="md:w-1/12" />

          <div className="flex flex-col">
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
              <div className="text-sm pt-10 pb-10 w-3/4">
                <p>
                  Some friends of mine and me started an own agency with the focus on coding. We are four full stack
                  developers trying to step into freelancing and gain some momentum with our own site. Unfortunately the
                  site is under construction right now. The relaunch will happen soon.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/4">
            <span className="text-lg">2018 - 2019</span>
          </div>
          <div className="md:w-1/12" />

          <div className="flex flex-col">
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
              <div className="text-sm pt-10 pb-10 w-3/4">
                <p>
                  Some friends of mine and me started an own agency with the focus on coding. We are four full stack
                  developers trying to step into freelancing and gain some momentum with our own site. Unfortunately the
                  site is under construction right now. The relaunch will happen soon.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/4">
            <span className="text-lg">2018 - TODAY</span>
          </div>
          <div className="md:w-1/12" />

          <div className="flex flex-col">
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
              <div className="text-sm pt-10 pb-10 w-3/4">
                <p>
                  Some friends of mine and me started an own agency with the focus on coding. We are four full stack
                  developers trying to step into freelancing and gain some momentum with our own site. Unfortunately the
                  site is under construction right now. The relaunch will happen soon.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/4">
            <span className="text-lg">2018 - TODAY</span>
          </div>
          <div className="wd:w-1/12" />

          <div className="flex flex-col">
            <p className="text-lg">
              FREELANCER AS <br />
              FULLSTACK DEVELOPER
            </p>
            <div className="hover-fadein">
              <span className="text-xs text-grey1">FEATURE</span>
              <div className="flex text-xs ">
                <span className="pr-5">FRONTEND</span>
                <span className="pr-5">BACKEND</span>
                <span className="pr-5">APP</span>
                <span className="pr-5">SEO</span>
              </div>
              <div className="text-sm pt-10 pb-10 w-3/4">
                <p>
                  Some friends of mine and me started an own agency with the focus on coding. We are four full stack
                  developers trying to step into freelancing and gain some momentum with our own site. Unfortunately the
                  site is under construction right now. The relaunch will happen soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline

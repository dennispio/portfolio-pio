import React, { useState } from 'react'
import './project.scss'

interface Projectdetailscheck {
  projectdetails: string
}

const Project = (): JSX.Element => {
  const [changeVis, setChangeVis] = useState('immajung')

  const ChangeHandler = (e: string): void => {
    setChangeVis(e)
    console.log(changeVis)
  }

  return (
    <div className="container">
      <h3 className="text-xl mb-10 md:mb-20 ">PROJECT</h3>
      <div className="grid-main">
        <div className="project-reiter">
          {changeVis == 'immajung' ? (
            <div className="pb-12">
              <span onClick={() => ChangeHandler('immajung')}>IMMAJUNG</span>
            </div>
          ) : (
            <div className="pb-12">
              <span className="text-grey1 cursor-pointer" onClick={() => ChangeHandler('immajung')}>
                IMMAJUNG
              </span>
            </div>
          )}
          {changeVis == 'faber' ? (
            <div className="pb-12">
              <span onClick={() => ChangeHandler('faber')}>FABER</span>
            </div>
          ) : (
            <div className="pb-12">
              <span className="text-grey1 cursor-pointer" onClick={() => ChangeHandler('faber')}>
                FABER
              </span>
            </div>
          )}
          {changeVis == 'other' ? (
            <div className="pb-12">
              <span onClick={() => ChangeHandler('other')}>OTHER</span>
            </div>
          ) : (
            <div className="pb-12 cursor-pointer">
              <span className="text-grey1" onClick={() => ChangeHandler('other')}>
                OTHER
              </span>
            </div>
          )}
        </div>
        {
          {
            immajung: <Immajung />,
            faber: <Faber />,
            other: <Other />,
          }[changeVis]
        }
      </div>
    </div>
  )
}

const Faber = (): JSX.Element => {
  return (
    <div className="fadein">
      <div className="projekt-details">
        <div className="flex flex-col">
          <span className="text-xs">2019</span>
          <span className="text-xs text-grey1 pt-3"> ERNÄHRUNGSBERATUNG FABER</span>
          <p className="max-w-xl uppercase pt-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.{' '}
          </p>
          <div className="flex pt-3">
            <div className="w-1/2 text-xs text-grey1 ">
              <span>TECHNOLOGIE STACK</span>
              <div className="text-white flex flex-col">
                <span className="pt-3">JAVASCRIPT</span>
                <span className="pt-3">NETLIFY</span>
                <span className="pt-3">GATSBY</span>
                <span className="pt-3">CSS</span>
              </div>
            </div>
            <div className="text-xs text-grey1">
              <span>FEATURE</span>
              <div className="text-white flex flex-col">
                <span className="pt-3">ONPAGE SEO</span>
                <span className="pt-3">OFFPAGE SEO</span>
                <span className="pt-3">LANDINGPAGE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="background-faber">
          <img src={require('../../img/faber.png')} width="75%" height="75%" />
        </div>
      </div>
    </div>
  )
}

const Other = (): JSX.Element => {
  return (
    <div className="projekt-details fadein">
      <div className="flex flex-col">
        <span className="text-xs">2019</span>
        <span className="text-xs text-grey1 pt-3"> OTHER</span>
        <p className="max-w-xl uppercase pt-3">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.{' '}
        </p>
        <div className="flex pt-3">
          <div className="w-1/2 text-xs text-grey1 ">
            <span>TECHNOLOGIE STACK</span>
            <div className="text-white flex flex-col">
              <span className="pt-3">JAVASCRIPT</span>
              <span className="pt-3">NETLIFY</span>
              <span className="pt-3">GATSBY</span>
              <span className="pt-3">CSS</span>
            </div>
          </div>
          <div className="text-xs text-grey1">
            <span>FEATURE</span>
            <div className="text-white flex flex-col">
              <span className="pt-3">ONPAGE SEO</span>
              <span className="pt-3">OFFPAGE SEO</span>
              <span className="pt-3">LANDINGPAGE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="background-faber">
        <img src={require('../../img/testimmage.jpeg')} width="75%" height="75%" />
      </div>
    </div>
  )
}

const Immajung = (): JSX.Element => {
  return (
    <div className="projekt-details fadein">
      <div className="flex flex-col">
        <span className="text-xs">2019</span>
        <span className="text-xs text-grey1 pt-3">IMMAJUNG STREETWEAR</span>
        <p className="max-w-xl uppercase pt-3">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.{' '}
        </p>
        <div className="flex pt-3">
          <div className="w-1/2 text-xs text-grey1 ">
            <span>TECHNOLOGIE STACK</span>
            <div className="text-white flex flex-col">
              <span className="pt-3">JAVASCRIPT</span>
              <span className="pt-3">NETLIFY</span>
              <span className="pt-3">GATSBY</span>
              <span className="pt-3">CSS</span>
            </div>
          </div>
          <div className="text-xs text-grey1">
            <span>FEATURE</span>
            <div className="text-white flex flex-col">
              <span className="pt-3">ONPAGE SEO</span>
              <span className="pt-3">OFFPAGE SEO</span>
              <span className="pt-3">LANDINGPAGE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="background-faber">
        <img src={require('../../img/testimmage.jpeg')} width="75%" height="75%" />
      </div>
    </div>
  )
}

export default Project

import React, { useState } from 'react'
import './project.scss'

interface Projectdetailscheck {
  projectdetails: string
}

interface ProjekteProps {
  projekteData: {
    projektetext1: string
    projektetext2: string
    projektetext3: string
    projektetext4: string
  }
}

const Project = ({ projekteData }: ProjekteProps): JSX.Element => {
  const [changeVis, setChangeVis] = useState('immajung')

  const ChangeHandler = (e: string): void => {
    setChangeVis(e)
    console.log(changeVis)
  }

  return (
    <div className="container">
      <h3 className="text-xl mb-10 md:mb-20">PROJECT</h3>
      {console.log(projekteData)}
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
          {changeVis == 'master' ? (
            <div className="pb-12">
              <span onClick={() => ChangeHandler('master')}>MASTER</span>
            </div>
          ) : (
            <div className="pb-12">
              <span className="text-grey1 cursor-pointer" onClick={() => ChangeHandler('master')}>
                MASTER
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
            immajung: <Immajung projekteData={projekteData} />,
            faber: <Faber projekteData={projekteData} />,
            other: <Other projekteData={projekteData} />,
            master: <Master projekteData={projekteData} />,
          }[changeVis]
        }
      </div>
    </div>
  )
}

const Master = ({ projekteData }: ProjekteProps): JSX.Element => {
  return (
    <div className="fadein">
      <div className="projekt-details">
        <div className="flex flex-col">
          <span className="text-xs">2019</span>
          <a href="https://github.com/dennispio/masterarbeit" className="text-xs text-grey1 pt-3">
            CASE-BASED REASONING MASTER SOCCER
          </a>
          <p className="max-w-xl uppercase pt-3">{projekteData.projektetext4}</p>
          <div className="flex pt-3">
            <div className="w-1/2 text-xs text-grey1 ">
              <span>TECHNOLOGIE STACK</span>
              <div className="text-white flex flex-col">
                <span className="pt-3">JAVA</span>
                <span className="pt-3">MYCBR</span>
                <span className="pt-3">REACT</span>
                <span className="pt-3">APACHE TOM CAT</span>
                <span className="pt-3">SPRING</span>
                <span className="pt-3">CSS</span>
              </div>
            </div>
            <div className="text-xs text-grey1">
              <span>FEATURE</span>
              <div className="text-white flex flex-col">
                <span className="pt-3">MACHINE LEARNING</span>
                <span className="pt-3">CASE BASED REASONING</span>
                <span className="pt-3">WEBSCRAPPING</span>
              </div>
            </div>
          </div>
        </div>
        <div className="background-faber">
          <img src={require('../../img/master.png')} width="75%" height="75%" />
        </div>
      </div>
    </div>
  )
}

const Faber = ({ projekteData }: ProjekteProps): JSX.Element => {
  return (
    <div className="fadein">
      <div className="projekt-details">
        <div className="flex flex-col">
          <span className="text-xs">2019</span>
          <a href="https://www.ernaehrungsberatung-faber.de/" className="text-xs text-grey1 pt-3">
            ERNÄHRUNGSBERATUNG FABER
          </a>
          <p className="max-w-xl uppercase pt-3">{projekteData.projektetext2}</p>
          <div className="flex pt-3">
            <div className="w-1/2 text-xs text-grey1 ">
              <span>TECHNOLOGIE STACK</span>
              <div className="text-white flex flex-col">
                <span className="pt-3">JAVASCRIPT</span>
                <span className="pt-3">REACT</span>
                <span className="pt-3">NETLIFY</span>
                <span className="pt-3">GATSBY</span>
                <span className="pt-3">CSS</span>
              </div>
            </div>
            <div className="text-xs text-grey1">
              <span>FEATURE</span>
              <div className="text-white flex flex-col">
                <span className="pt-3">SERVERLESS FUNCTION</span>
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

const Other = ({ projekteData }: ProjekteProps): JSX.Element => {
  return (
    <div className="projekt-details">
      <div className="projekt-details">
        <div className="flex flex-col">
          <span className="text-xs">2019</span>
          <span className="text-xs text-grey1 pt-3">OTHER</span>
          <p className="max-w-xl uppercase pt-3">{projekteData.projektetext3}</p>
          <div className="flex pt-3">
            <div className="w-1/2 text-xs text-grey1 ">
              <span>TECHNOLOGIE STACK</span>
              <div className="text-white flex flex-col">
                <span className="pt-3">PYTHON</span>
                <span className="pt-3">C++</span>
                <span className="pt-3">WORDPRESS</span>
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
    </div>
  )
}

const Immajung = ({ projekteData }: ProjekteProps): JSX.Element => {
  return (
    <div className="projekt-details fadein">
      <div className="flex flex-col">
        <span className="text-xs">2019</span>
        <a href="https://immajung.com" className="text-xs text-grey1 pt-3">
          IMMAJUNG STREETWEAR
        </a>
        <p className="max-w-xl uppercase pt-3">{projekteData.projektetext1}</p>
        <div className="flex pt-3">
          <div className="w-1/2 text-xs text-grey1 ">
            <span>TECHNOLOGIE STACK</span>
            <div className="text-white flex flex-col">
              <span className="pt-3">JAVASCRIPT</span>
              <span className="pt-3">REACT</span>
              <span className="pt-3">SNIPCARD</span>
              <span className="pt-3">TAILWIND</span>
              <span className="pt-3">NETLIFY</span>
              <span className="pt-3">GATSBY</span>
              <span className="pt-3">CSS</span>
            </div>
          </div>
          <div className="text-xs text-grey1">
            <span>FEATURE</span>
            <div className="text-white flex flex-col">
              <span className="pt-3">SERVERLESS FUNCTION</span>
              <span className="pt-3">ONPAGE SEO</span>
              <span className="pt-3">OFFPAGE SEO</span>
              <span className="pt-3">LANDINGPAGE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="background-faber">
        <img src={require('../../img/immajung.png')} width="75%" height="75%" />
      </div>
    </div>
  )
}

export default Project

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
      <h3 className="text-xl mb-10 md:mb-20">PROJECT</h3>
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
            immajung: <Immajung />,
            faber: <Faber />,
            other: <Other />,
            master: <Master />,
          }[changeVis]
        }
      </div>
    </div>
  )
}

const Master = (): JSX.Element => {
  return (
    <div className="fadein">
      <div className="projekt-details">
        <div className="flex flex-col">
          <span className="text-xs">2019</span>
          <a href="https://github.com/dennispio/masterarbeit" className="text-xs text-grey1 pt-3">
            CASE-BASED REASONING MASTER SOCCER
          </a>
          <p className="max-w-xl uppercase pt-3">
            Ziel dieser Abschlussarbeit war es ein Konzept zu entwerfen und zu Implementieren das verschiedene
            Maschinelle Lernverfahren miteinander kombiniert und diese aufbereitet. Weiterhin kann durch das entwickelte
            System die einzelnen Spieler miteinander verglichen werden und alternativen für für diesen Spieler finden.
            dafür wurden Daten von verschiedenen Seite gefiltert, durch myCbr eingespeichert, vergleichbar gemacht und
            durch Spring als Schnittstele mit React visualisiert.
          </p>
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

const Faber = (): JSX.Element => {
  return (
    <div className="fadein">
      <div className="projekt-details">
        <div className="flex flex-col">
          <span className="text-xs">2019</span>
          <a href="https://www.ernaehrungsberatung-faber.de/" className="text-xs text-grey1 pt-3">
            ERNÄHRUNGSBERATUNG FABER
          </a>
          <p className="max-w-xl uppercase pt-3">
            Ernährungsberatung Faber ist eine in Hannover - Langenhagen ansässige Ernährungsberatung. Ziel dieses
            Projektes war es, mit minmalen Ertrag das maximalean Performance einer Webseite zu erreichen. Hierfür wurden
            zwecks maximaler Performancem Technologien wie der Gatsby(Static Site Generator), Netlify (CMS und Host),
            React und Serveless Functions genutzt. Neben der Erstellung der Webseite wurde Suchmaschinenoptierung
            betrieben, um möglichst große Sichtbarkeit der Webseite zu erreichen.
          </p>
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

const Other = (): JSX.Element => {
  return (
    <div className="projekt-details">
      <div className="projekt-details">
        <div className="flex flex-col">
          <span className="text-xs">2019</span>
          <span className="text-xs text-grey1 pt-3">OTHER</span>
          <p className="max-w-xl uppercase pt-3">
            Bei einem Praktikum bei der Finanzinformatik habe ich einen automatisierten Test implementiert der
            verschiedene Umgebungen eines Internetsauftritt auf verschiedene Dinge testet. Das ganze wurde in Python
            umgesetzt.
          </p>
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

const Immajung = (): JSX.Element => {
  return (
    <div className="projekt-details fadein">
      <div className="flex flex-col">
        <span className="text-xs">2019</span>
        <a href="https://immajung.com" className="text-xs text-grey1 pt-3">
          IMMAJUNG STREETWEAR
        </a>
        <p className="max-w-xl uppercase pt-3">
          Immajung Streetwear brauchte ein Internetauftritt mit einer Anbindung für ein Shopsystem. Dabei muss die
          Webseite schnellstmöglich die einzelnen Produkte laden und die Kaufabwicklung reibungslos funktionieren. Dabei
          wurden die Technologien Gatsby.js und Snipcard und NetlifyCMS verwendet
        </p>
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

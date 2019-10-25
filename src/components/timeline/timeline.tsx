import React from 'react'
import './timeline.scss'

const Timeline = (): JSX.Element => {
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
                <p>
                  2019 habe ich mich, nachdem ich viele Projekte im Rahmen meines Studiums und im Privaten absolviert
                  habe, dafür entschieden, als Freelancer zu arbeiten. Dabei konnte ich Aufgrund meiner Aufträge bereits
                  Einblicke in viele verschiedene Technologien bekommen und mich stetig Fortbilden. Ich arbeite
                  leidenschaftlich mit Web technologien und freue mich auf jede neue Herausforderung.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/5">
            <span className=" md:text-lg md:text-white text-xs text-grey1">2018 - TODAY</span>
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
                <p>
                  Im Rahmen meines Masters in der angewandten Informatik, habe ich mich für die Thematiken der
                  künstlichen Intelligenz und Web Technologien interessiert. Besonders die Themen Case-Based Reasoning,
                  Medieninformatik, Robotik und das Semantik Web begeisterten mich. Im Laufe meines Studiums
                  beschäftigte ich mich mit Methodiken zum Software Projektmanagement und absolvierte Projekte in der
                  Robotik und dem Semantik Web. Meine Abschlussarbeit beschäftigte sich mit dem Thema "Maschinelles
                  Lernen und Mustererkennung zur Datenanalyse im Sport - Systematische Literaturrecherche und
                  Modellierung einer Multiagentensystem basierten Architektur zur Entscheidungsunterstützung im Fußball"
                </p>
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
                <p>
                  Einige Freunde von mir starteten im Jahr 2018 mit der Idee eine eigene modelinie zu entwickeln, die
                  sich dem Lifestyle eines Programmieres annimmt. Hierfür entwickelten wir eine eigene Streetwearmarke
                  "immajung". Da wir selber gerne modische Casual Kleidung tragen, haben wir uns dieser Aufgabe
                  angenommen.
                </p>
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
                <p>
                  Im Rahmen meines Masterstudiums habe ich bei der Continental AG als Werkstudent gearbeitet. Hierbei
                  habe ich neben dem Webdesign von internen Webseiten und der anschließenden Programmierung, eine
                  geplannte interne App durch Konzeptentwicklung und Erstellung von User-Stories begleitet.
                </p>
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
                <p>
                  Im Rahmen meines Bachelor "Informationsmanagement und Informationstechnologie" habe ich viele
                  verschiedene grundlegende Einblicke in diverse Programmiersprachen und Web Technologien (HTML, CSS,
                  JAVASCRIPT, JAVA, C++, SQL, Python) erhalten und in diversen Projekten erste Erfahrungen in der
                  Softwareentwicklung sammeln. Das Thema meiner Bachelorarbeit behandelte die systematische
                  Litereraturrecherche in der Fußball Datenanalyse.
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

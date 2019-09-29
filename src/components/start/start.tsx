import React, { ReactElement, useState } from 'react'
import { Link, graphql } from 'gatsby'
import '../../constants/style/variables.scss'
import '../start/start.scss'

interface Start {
  onChange: Function
}

const Start = ({ onChange }: Start): JSX.Element => {
  const [fadeOutEffect, setfadeOutEffect] = useState('')
  const [pulsEffect, setpulsEffect] = useState(false)

  const startviewchange = (): void => {
    onChange(true)
    setfadeOutEffect('fade-out')
    setTimeout((): void => {
      setpulsEffect(true)
    }, 2000)
  }

  return (
    <div className="container-full">
      <div className="content-mitte">
        {pulsEffect == false ? (
          <div className={fadeOutEffect}>
            <p className="text-lg">
              WELCOME
              <br />
              MY NAME IS DENNIS PIOTROWSKI <br />
              YOU CAN JUST CALL ME PIO
              <br />
              IM GLAD THAT YOU ARE VISITING MY WEBSITE <br />
              IF YOU HAVE ANY PROJECTS JUST CONTACT ME
            </p>
            <button onClick={startviewchange} className="buttons pulse">
              EXPLORE
            </button>
          </div>
        ) : (
          <span className="projectfadein-text projekt-text">TIME FOR THE NEXT PROJECT ?</span>
        )}
      </div>
    </div>
  )
}

export default Start

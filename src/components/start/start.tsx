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
    <div className="container">
      <div className="content-mitte">
        {pulsEffect == false ? (
          <div className={fadeOutEffect}>
            <p className="text-lg max-w-xs uppercase">
              WILLKOMMEN ICH HEIßE DENNIS. ICH FREUE MICH DASS DU MEINE WEBSEITE BESUCHST. WENN DU IRGENDWELCHE FRAGEN
              ZU MEINEN PROJEKTEN ODER ALLGEMEIN ZU MIR, KANNST DU MICH GERNE KONTAKTIEREN.
            </p>
            <button onClick={startviewchange} className="btn-flip" data-back="NOW" data-front="EXPLORE"></button>
          </div>
        ) : (
          <span className="projectfadein-text md:text-6xl text-xl">TIME FOR THE NEXT PROJECT ?</span>
        )}
      </div>
    </div>
  )
}

export default Start

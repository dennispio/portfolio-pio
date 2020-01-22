import React, { ReactElement, useState } from 'react'
import { Link, graphql } from 'gatsby'
import '../../constants/style/variables.scss'
import '../start/start.scss'
import Image from '../util/image/Image'

interface Start {
  onChange: Function
  startData: StartProps
}

interface StartProps {
  text: string
}

const Start = ({ onChange, startData }: Start): JSX.Element => {
  const [fadeOutEffect, setfadeOutEffect] = useState('')
  const [pulsEffect, setpulsEffect] = useState(false)
  const [fadeOutEffectBackground, setfadeOutEffectBackground] = useState('background-pio')

  const startviewchange = (): void => {
    onChange(true)
    setfadeOutEffect('fade-out ')
    setfadeOutEffectBackground('background-pio-effect background-pio')
    setTimeout((): void => {
      setpulsEffect(true)
    }, 2000)
  }

  interface StartProps {
    startData: {
      text: string
    }
  }

  return (
    <div className="container-full">
      <div />
      <div className={fadeOutEffectBackground}>
        <Image alt="backgroundlogo" imageName="background.jpeg" />
      </div>
      <div className="content-mitte">
        {pulsEffect == false ? (
          <div className={fadeOutEffect}>
            <p className="text-lg max-w-xs uppercase">{startData.text}</p>
            <button onClick={startviewchange} className="btn-flip" data-back="NOW" data-front="EXPLORE"></button>
          </div>
        ) : (
          <span className="md:text-6xl text-xl" />
        )}
      </div>
    </div>
  )
}

export default Start

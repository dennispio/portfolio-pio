import React, { useState } from 'react'
import { Link } from 'gatsby'
import './navigation.scss'
import { useScrollDirection } from '../../../hooks/hooks'

interface LocaleProps {
  locale: string
  localeSwitch: string
}

const Navigation = ({ locale, localeSwitch }: LocaleProps): JSX.Element => {
  const scrollDirection: string = useScrollDirection()
  return (
    <nav
      style={scrollDirection === 'UP' || scrollDirection === 'NONE' ? { top: 0 } : { top: '-150px' }}
      className="fadeintop container-full fixed mt-10"
    >
      <div className="container flex ">
        <div className="w-1/5 md:w-1/3 lg:w-1/3 text-xl">
          <Link to="/" className="text-white">
            PIO
          </Link>
        </div>
        <div className="w-3/5 md:w-3/5 lg:w-2/4 text-xl">
          <a href="https://www.xing.com/profile/Dennis_Piotrowski4" className="ml-5 mr-5 md:mr-10 underline-effect">
            XING
          </a>
          <a href="https://github.com/dennispio" className="mr-5 md:mr-10 underline-effect">
            GITHUB
          </a>
          <Link to="#kontakt" className="underline-effect">
            KONTAKT
          </Link>
        </div>
        <div className="w-1/5 md:w-1/5 lg:w-1/4 text-xl">
          <Link className="underline-effect uppercase" to={locale}>
            {localeSwitch}
            {console.log(localeSwitch + 'TESTEST')}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

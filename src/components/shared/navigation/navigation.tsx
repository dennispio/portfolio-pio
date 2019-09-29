import React, { useState } from 'react'
import { Link } from 'gatsby'
import './navigation.scss'

const Navigation = (): JSX.Element => {
  return (
    <nav className="fadeintop container-full fixed mt-10">
      <div className="container flex ">
        <div className="w-1-3  text-xl">
          <span>PIO</span>
        </div>
        <div className="w-1-3  text-xl">
          <a href="https://www.xing.com/profile/Dennis_Piotrowski4" className="underline-effect">
            XING
          </a>
          <a href="https://github.com/dennispio" className="underline-effect">
            GITHUB
          </a>
          <Link to="#kontakt" className="underline-effect">
            KONTAKT
          </Link>
        </div>
        <div className="w-1-3"></div>
      </div>
    </nav>
  )
}

export default Navigation

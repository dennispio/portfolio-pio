import React, { useState } from 'react'
import { Link } from 'gatsby'
import './navigation.scss'

const Navigation = (): JSX.Element => {
  return (
    <nav className="fadeintop container-full fixed mt-10">
      <div className="container flex ">
        <div className=" lg:w-1/3 text-xl">
          <Link to="/" className="text-white">
            PIO
          </Link>
        </div>
        <div className=" lg:w-2/3 text-xl">
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
      </div>
    </nav>
  )
}

export default Navigation

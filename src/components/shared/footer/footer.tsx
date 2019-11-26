import React, { useState } from 'react'
import { Link } from 'gatsby'
import './footer.scss'

interface localeProps {
  locale: string
}

const Footer = ({ locale }: localeProps): JSX.Element => {
  const imprint = `/legal/en/imprint`
  const privacy = `/legal/en/privacy`

  return (
    <div className="container-full border-t-2 border-white border-solid">
      <div className="container">
        <div className="flex">
          <div className="w-1/3 text-center pb-5 flex flex-col">
            <a href="mailto:dennis.piotrowski@web.de" className="pt-5 linkhover opacity-50 ">
              E-MAIL
            </a>
            <a href="https://github.com/dennispio" className="pt-5 linkhover opacity-50 ">
              GITHUB
            </a>
            <a href="https://www.xing.com/profile/Dennis_Piotrowski4" className="pt-5 linkhover opacity-50 ">
              XING
            </a>
          </div>
          <div className="w-1/3 text-center pb-5 flex flex-col">
            <Link to={imprint} className="pt-5 linkhover opacity-50 ">
              IMPRINT
            </Link>
            <Link to={privacy} className="pt-5 linkhover opacity-50 ">
              PRIVACY
            </Link>
          </div>
          <div className="w-1/3 text-center pb-5 flex flex-col">
            <Link className="pt-5 linkhover opacity-50">BLOG</Link>
            <Link className="pt-5 linkhover opacity-50">IMMAJUNG</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

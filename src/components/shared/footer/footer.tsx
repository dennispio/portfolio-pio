import React, { useState } from 'react'
import { Link } from 'gatsby'
import './footer.scss'

const Footer = (): JSX.Element => {
  return (
    <div className="container-full border-t-2 border-white border-solid">
      <div className="container">
        <div className="flex">
          <div className="w-1/3 text-center pt-5 flex flex-col">
            <Link className="pt-5 linkhover opacity-50 ">E-MAIL</Link>
            <Link className="pt-5 linkhover opacity-50 ">GITHUB</Link>
            <Link className="pt-5 linkhover opacity-50 ">XING</Link>
          </div>
          <div className="w-1/3 text-center pt-5 flex flex-col">
            <Link className="pt-5 linkhover opacity-50 ">IMPRINT</Link>
            <Link className="pt-5 linkhover opacity-50 ">PRIVACY</Link>
          </div>
          <div className="w-1/3 text-center pt-5 flex flex-col">
            <Link className="pt-5 linkhover opacity-50 ">BLOG</Link>
            <Link className="pt-5 linkhover opacity-50 ">IMMAJUNG</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

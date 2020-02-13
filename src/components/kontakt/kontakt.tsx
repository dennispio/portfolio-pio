import React, { useState } from 'react'
import { Link } from 'gatsby'
import './kontakt.scss'

const Kontakt = (): JSX.Element => {
  return (
    <div className="container">
      <h3 className="text-xl mb-10 md:mb-20 ">KONTAKT</h3>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4">
          <p className="pb-5">FREE FOR FREELANCING.</p>
          <p className="pb-5">WORKING REMOTE.</p>
          <p className="pb-5">CONTACT ME AND TELL ME ABOUT YOUR NEW PROJECT IDEA </p>
          <p className="pb-5">DENNS.PIOTROWSKI@WEB.DE</p>
        </div>
        <div className="md:w-1/5" />
        <div className="md:w-2/4">
          <form
            className="flex flex-col"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact Form"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact Form" />
            <label className="text-grey1" htmlFor="fname">
              NAME
            </label>
            <input className="text-black h-8" required name="nameContact" type="text" id="nameContact" />
            <label className="text-grey1 pt-3" htmlFor="femail">
              E-MAIL
            </label>
            <input className="text-black  h-8" required name="emailContact" type="email" id="emailContact" />
            <label className="text-grey1 pt-3" htmlFor="fphone">
              PHONE
            </label>
            <input className="text-black  h-8" required name="phoneContact" id="phoneContact" />
            <label className="text-grey1 pt-3" htmlFor="fmessage">
              MESSAGE
            </label>
            <textarea className="text-black  h-24" name="nachrichtContact" id="nachrichtContact" required />
            <label className="pt-5" htmlFor="fprivacy">
              <Link to="legal/de/privacy" target="_blank" className="pr-5">
                PRIVACY
              </Link>{' '}
              <input type="checkbox" name="datenschutzContact" required />
            </label>
            <button className="btn-flip cursor-pointer" data-back="NOW" data-front="SEND ME A MESSAGE" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Kontakt

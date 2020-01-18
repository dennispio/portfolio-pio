import React, { useState } from 'react'
import { Link } from 'gatsby'
import './kontakt.scss'

const Kontakt = (): JSX.Element => {
  return (
    <div id="kontakt" className="container">
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
            name="KontaktFormular"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="KontaktFormular" />
            <label className="text-grey1">NAME</label>
            <input className="text-black h-8" name="Name"></input>
            <label className="text-grey1 pt-3">E-MAIL</label>
            <input className="text-black  h-8" name="Email"></input>
            <label className="text-grey1 pt-3">PHONE</label>
            <input className="text-black  h-8" name="Email"></input>
            <label className="text-grey1 pt-3">MESSAGE</label>
            <textarea className="text-black  h-24" name="Nachricht" />
            <label className="pt-5">
              <span className="pr-5"> DATENSCHUTZ</span>{' '}
              <input type="checkbox" name="vehicle3" value="datenschutz" required />
            </label>
            <button
              action="/thankyou"
              className="btn-flip cursor-pointer"
              data-back="NOW"
              data-front="SEND ME A MESSAGE"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Kontakt

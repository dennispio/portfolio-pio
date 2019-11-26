import React, { ReactNode } from 'react'
import './layout.scss'
import Navigation from '../../shared/navigation/navigation'
import Footer from '../../shared/footer/footer'

interface Props {
  children: ReactNode
  locale: string
}

const Layout = ({ children, locale }: Props): JSX.Element => {
  return (
    <>
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  )
}

export default Layout

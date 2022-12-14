import React from 'react'
import logo from "../../assets/images/logo_kasa_white_512w.png";


export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" className="logo"/>
      <h3>© 2020 Kasa. All rights reserved</h3>
    </footer>
  )
}

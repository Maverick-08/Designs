import React from "react"
import logo from "../assets/kevinRushLogo.png"
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className='py-6 flex justify-between items-center'>
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter/>
      </div>
    </nav>
  )
}

export default Navbar

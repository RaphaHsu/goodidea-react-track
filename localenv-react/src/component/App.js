import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar.js"
import Banner from './Banner.js'
import Content from './Content.js'
import Footer from './Footer.js'

export default function() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Content/>
      <Footer/>
    </div>
  )
}

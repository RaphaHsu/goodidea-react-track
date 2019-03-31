import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./styles/Reset.scss";
import "./styles/global.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram, faTwitter, faPinterestP)

ReactDOM.render(<App />, document.getElementById("root"));
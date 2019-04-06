import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./container/Homepage"
import "./styles/reset.scss";
import "./styles/_global.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo ,faTrain,faDrawPolygon} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF ,faInstagram,faTwitter,faPinterestP} from '@fortawesome/free-brands-svg-icons'


library.add(faFacebookF,faInstagram,faTwitter,faPinterestP)

ReactDOM.render(<Homepage />, document.getElementById("root"));

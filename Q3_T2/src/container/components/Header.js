import React, { Component} from "react";
import "../../styles/header.scss"

class Header extends Component{
 render(){
   return(
     <header>
       <div class="logo"></div>
       <nav>
          <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Sale</a>
      <a href="#">Customer</a>


       </nav>
     </header>
   );
 }
}

export default Header;

import React, { Component} from "react";
import Header from "./components/Header.js";
import Banner from "./components/Banner.js";

class Homepage extends Component{
 render(){
   return(
     <div className="homepage">
      <Header></Header>
      <Banner></Banner>
     </div>
   );
 }
}

export default Homepage;

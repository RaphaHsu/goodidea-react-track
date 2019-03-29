import React, { Component} from "react";
import Header from "./components/Header.js";
import Banner from "./components/Banner.js";
import Mainproducts from "./components/Mainproducts.js";


class Homepage extends Component{
 render(){
   return(
     <div className="homepage">
      <Header></Header>
      <Banner></Banner>
    <Mainproducts></Mainproducts>
     </div>
   );
 }
}

export default Homepage;

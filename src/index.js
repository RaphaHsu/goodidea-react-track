import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader"
import Hello from "./containers/Hello/Hello";

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root'),
    )
  }
  
  render(Hello)
  
  // webpack Hot Module Replacement API
  if (module.hot) {
    // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
    // while `hot` would configure HMR for the CURRENT module
    module.hot.accept('./containers/Hello/Hello', () => {
      // if you are using harmony modules ({modules:false})
      render(Hello)
      // in all other cases - re-require App manually
      render(require('./containers/Hello/Hello'))
    })
  }
- 在專案資料夾下Terminal輸入`npm init`

- 創立一個 `.gitignore`來避免不需要的檔案被加入 remote repo
  我們將 `/node_modules` 和 `/dist` 給 忽略掉

- `npm install`

  ### babel

- `npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0`

  `babel-core` 是主要 babel package：我們要依靠這個，babel才能轉換我們的程式碼
  `babel-cli` 允許我們用 command line 來編譯我們的檔案
  `preset-env` ES6 轉 ES5
  `preset-react`JSX 轉 ES5

- 根目錄創一個 `.babelrc` 告訴babel我們要使用 env 和 react 兩個 presets

  ```
  {
    "presets": ["@babel/env", "@babel/preset-react"]
  }
  ```

  ### webpack

- `$ npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0`

  > 雖然教學是這樣教的，但是如果要印出Hello world而已
  > style-loader 和 css-loader 是不需要的

- 根目錄創立一個webpack.config.js

- ```javascript
  const path = require("path");
  const webpack = require("webpack");
  
  module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };
  ```

  `entry` 進入點：告訴webpack我們要從哪裡開始打包
  `mode` 告訴webpack 是 develpoment，這樣在運行 dev-server 的時候就不用額外新增 mode flag
  `module` 定義了如何轉出 javascript modules，並在 `rules`中定義他
  舉例：當檔案是 `.js` `.jsx`時，我們就使用 babel-loader 去編譯他，並指定要用 `env` preset
  `resolve` 指定了 webpack 要解析那些 extensions
  `output` 告訴 webpack 打包好的程式碼要輸出在哪
  `publicPath` 指定路徑，也告訴 webpack-dev-server 要去哪裡找檔案

  > 設定錯了，會得到404

  `devServer` 則是設定 `webpack-dev-server` 用的， port 3000，`publicPath` 是拿來告訴 server ，我們的 bundle.js 在哪
   [output.publicPath](https://webpack.js.org/configuration/output/#outputpublicpath) vs [devServer.publicPath](https://webpack.js.org/configuration/dev-server/#devserverpublicpath-)

  ### React

- `$npm install react react-dom react-scripts`

- 接著我們創建一個 `public` 資料夾，創立一個 `index.html`

  ```html
  <!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>React Starter</title>
  </head>
  
  <body>
    <div id="root"></div>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <script src="../dist/bundle.js"></script>
  </body>
  ```

- 接著我們創立 `src` 資料夾，在其內加入 `App.css`、`App.js`、`index.js`

  #### index.js

  ```javascript
  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App.js";
  ReactDOM.render(<App />, document.getElementById("root"));
  ```

  `#root`就是我們react要 `render` 的地方

  #### App.js

  ```javascript
  import React, { Component} from "react";
  import "./App.css";
  
  class App extends Component{
    render(){
      return(
        <div className="App">
          <h1> Hello, World! </h1>
        </div>
      );
    }
  }
  
  export default App;
  ```

  #### App.css

  ```css
  .App {
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  ```
- 初始化
下載後 npm install ，安裝 package.json 的相關套件

- npm start
跑 server 並看到修改後的成果

- npm run webpack
產生靜態檔

參考此篇的：[How to use ReactJS with Webpack 4, Babel 7, and Material Design](https://medium.freecodecamp.org/how-to-use-reactjs-with-webpack-4-babel-7-and-material-design-ff754586f618)

嘗試將 commit 拆分，但不熟悉建立流程，所以拆分的有點不好，下面爲整理後比較好的流程

1. npm init
2. npm install --save-dev webpack webpack-cli webpack-dev-server path html-webpack-plugin
3. npm install --save-dev react react-dom babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader
3. 建立 .gitignore 內的內容 ： node_moduels 、 package-lock.json 、 dist
4. 設定 webpack.config 、 package.json 、 babelrc 的檔案內容
5. 建立 react 檔案與測試

# 建立專案手打麵

## 使用

- `npm run build` 建置佈署檔
- `npm run dev` 開發模式，頁面出現在 [http://localhost:8080](http://localhost:8080)

## 目錄

- **build** webpack config files
- **public** 靜態頁面檔，目前放置首頁模版檔 index.HtmlWebpackPlugin
- **src** source code，放置執行 react 的檔案。

## 檔案

- .babelrc 設定 babel 的地方
- .browserslistrc 設定瀏覽器支援度的地方，babel 的 preset-env 要設定。

# 創建步驟

## 安裝 webpack

```shell
npm install webpack webpack-cli webpack-merge html-webpack-plugin webpack-dev-server --save-dev
```
ref:
- https://webpack.js.org/guides/getting-started
- https://webpack.js.org/plugins/html-webpack-plugin/#root
- https://webpack.js.org/guides/production


## 貼上 React code

```javascript
import ReactDOM from 'react-dom';

ReactDOM.render(
  document.getElementById('root')
);
```

### 安裝 react

```shell
npm install react react-dom --save-dev
```

安裝 [React DevToolss](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)

## 安裝 Babel

```shell
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
```

**.babelrc**

```
{
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env"
  ]
}
```
ref: https://babeljs.io/docs/en/babel-preset-react

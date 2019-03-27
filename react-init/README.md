# 建立專案手打麵

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

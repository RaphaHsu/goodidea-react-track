# 從 0 到 1 的 React 開發環境

學習 React 的開始，先從印出 Hello, World 開始吧！

## 1. 本地開發環境

### 推薦開發 React 專案的 VSCode 插件

1. ES7 React/Redux/GraphQL/React-Native snippets ：快速產生 React 語法
2. sublime bible : 程式高亮

### 環境建置步驟

軟體需求

1. node.js 版本>= 6
2. npm 版本>= 5.2

輸入下面指令

```javascript=
npx create-react-app 資料夾名稱
cd 資料夾名稱
npm start
```

首先，先在 public 資料夾裡建 index.html 檔案
在 body 裡面插入要渲染的 React Component

```javascript=
<body>
  <div id="root" />
</body>
```

接著，在 src 資料夾裡的 index.js 文件引入 React 函式庫以及 Component，並使用 ReactDOM.render()方法將 Component 渲染出來

```javascript=
import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld.js";

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
```

最後，在 Component（HelloWorld.js）中設定頁面內容

```javascript=
import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
    return (
      <div className="helloContainer">
        <h1>Hello, I'm here ! :)</h1>
      </div>
    );
  }
}

export default HelloWorld;
```

### 加入 CSS 樣式

若要設定 Hello World 的樣式，可以建一個新的 HelloWorld.css 文件，將樣式加入後引入 HelloWorld.js 檔案內

```javascript=
import "./HelloWorld.css";
```

## 2. 引用 CDN

### 步驟

1. 引入 react.js、react-dom.js 的 CDN

```javascript=
//react library
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

2. 引入 babel CDN(用途：將 JSX 翻譯成瀏覽器看得懂的 JS)

```javascript=
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js" />
```

3. 撰寫下面程式碼

```javascript=
<body>
    //  1. 撰寫react component 要插入的地方
    <div id="app"></div>
    //  2. 使用babel，將JSX語法轉成JS
    <script type="text/babel">
      class App extends React.Component{
        render(){
          return(
           // 使用babel語法
           <div className="app-content">
              <h1>Hello World!!</h1>
           </div>
          )
        }
      }
      // 3. 將compoent渲染到virtual DOM
      ReactDOM.render(<App/>,document.getElementById('app')
      );
    </script>
  </body>

```

## 學習參考

[1. React 官方文件-Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
[2. The Net Ninja - Complete React Tutorial (with Redux)video 1-4](https://www.youtube.com/watch?v=Fis_Q3rkgtM&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=4)

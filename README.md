React 環境設置 (CDN/懶人法)
===

###### tags: `React`, `React Track`, `React入門`, `JavaScript`


## 安裝與設定環境

**React** 從一開始就被設計為逐步採用，可以根據需求來選擇使用 **React** 的範圍。

---

## CDN

1. 建立一個靜態的 `index.html` 檔案。
2. 在 `head` 中載入三個 CDN，分別是 `React`、`React DOM`、`Babel`。
3. `index.html` 中寫一個 `div`，`id` 是`root`。
4. 最後在`<body>` end tag 之前新增`script`區塊放置程式碼。
```htmlmixed=

<html>
  <head>
    <meta charset="utf-8" />

    <title>React_CDN</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>

    <script type="text/babel">
      // React code will go here
    </script>

  </body>
</html>
```

- 目前已經載入寫作時穩定的版本：
    - React - React 頂層的 API
    - React DOM - adds DOM-specific methods
        - The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.
    - Babel - a JavaScript compiler that lets us use ES6+ in old browsers

- #### 整個 `app` 的進入點會是這個 `div#root`，已經是使用慣例。


5. 現在，使用 `ES6` 的 `class` 來寫第一個 **React** 的程式，新增一個叫做 `app` 的 `component`。
```javascript=
class App extends React.Component {
  //...
}
```

6. 加入 `render()` 方法，這是 `class component` 唯一必須存在的 `method`，用來渲染 `DOM` 節點。

```javascript=
class App extends React.Component {
  render() {
      return (
          //...
      );
  }
}
```

7. 在 `return` 中，簡單放個 HTML 元素。要注意這邊放的類型並不是字串，所以不使用單引號或雙引號把內容包起來。這叫做 `JSX`，之後會談到更多。

```javascript=
class App extends React.Component {
  render() {
    return <h1>Hello, I'm here</h1>
  }
}
```
8. 最後，使用 **React** 提供的 DOM 渲染方法 `render()` 把 `App` 這個 `class` 創建到我們的 `div#root` 當中。

```javascript=
ReactDOM.render(<App />, document.getElementById('root'))
```


### index.html 最後長這樣

```javascript=
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>React_CDN</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>

    <script type="text/babel">
      class App extends React.Component {
        render() {
          return <h1>Hello, I'm here</h1>
        }
      }

      ReactDOM.render(<App />, document.getElementById('root'))
    </script>

  </body>
</html>
```

---

### 可以在瀏覽器看到內容就代表成功了：
![](https://i.imgur.com/b2Vd21c.png)


---

## Local Environment

CDN 引入 libraries 的方法並不是很有效率，也不容易維護，所幸 facebook 提供了`create-react-app`，它幫你在設定好在開發`React App` 前的所需的環境。
- live server
- Webpack 自動編譯 React, JSX, and ES6, auto-prefix CSS 檔案
- ESLint測試並提醒程式碼錯誤的地方

#### 設定 `create-react-app` （app 名稱）

打開 `terminal`，跟著以下步驟安裝。回到你想安裝專案的上一層資料夾，確定一下 `Node.js` 版本是否在 `5.2` 或以上。


#### 一、安裝
```bash=
npx create-react-app create-react-app
```

#### 二、進入專案資料夾，開始專案
```bash=
cd create-react-app
npm start
```

![](https://i.imgur.com/fgdmxV5.png)

#### 專案檔案包含：

觀察專案的結構，可以看到 `/public`、`/src` 兩個資料夾，和`node_modules`、`.gitignore`、`README.md`、`package.json` 這幾個檔案。

- 在 `/public` 中，`index.html` 是我們重要的檔案，跟先前使用 CDN 建立的 `index.html` 非常相似，都有著 `div#root`，只是這次沒有載入任何 libraries 和程式碼。
- `/src` 會放置我們所建立的 **React** 程式碼。
- `/src/App.js` 看環境如何自動編譯，找到以下這行改看動試試更新程式碼及樣板。
```javascript=
To get started, edit <code>src/App.js</code>
```
- 一旦更動程式碼發現 `localhost:3000` 自動更新樣板，這就是live server。
- 把 `/src` 資料夾中的檔案刪除，只留 `index.css` 和 `index.js`，不會爆掉。

---

#### 三、在 `index.js` 中 **import** `React`、`ReactDOM`、`CSS` 檔案：

```javascript=
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
```


我們再建立 `App component` 一次。使用 CDN 方法時，我們有個`<h1>`元素，但現在我們試著在`<div>`上加上`className`取代`class`來引入樣式規則。這意味著我們正在 `JavaScript` 中攥寫我們的樣板，而非真實 HTML 檔案。

```javascript=
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I'm here</h1>
      </div>
    )
  }
}
```

#### 四、以下是完整的 `index.js`，這次我們要把 `Component` 當作 **React** 的參數載入，這樣也就不需再 extend `React.Component`：

```javascript=
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I'm here</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

#### 五、打開瀏覽器 `localhost:3000` 看看，已經成功開始我們的 React 專案：

![](https://i.imgur.com/BjzXdwT.png)


---

## Reference

[參考連結](https://www.taniarascia.com/getting-started-with-react/)
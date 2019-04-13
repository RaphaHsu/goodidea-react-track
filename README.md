[![Build Status](https://travis-ci.org/ReactMaker/simple_react_startkit.svg?branch=master)](https://travis-ci.org/ReactMaker/simple_react_startkit)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![david-dm](https://david-dm.org/reactmaker/simple_react_startkit.svg)](https://david-dm.org/)
[![Known Vulnerabilities](https://snyk.io/test/github/ReactMaker/simple_react_startkit/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ReactMaker/simple_react_startkit?targetFile=package.json)

# Q4練習
該練習直接使用[simple_react_startkit](https://github.com/ReactMaker/simple_react_startkit)來進行環境建置

+ [DEMO](https://PenguinRun.github.io/goodidea-react-track)

# Simple React Startkit

This is a simple react boilerplate, without complex dependencies(eg. redux or router), this project can help you start the react project in seconds.

這個環境包可以讓你快速體驗 ReactJS 開發環境的便利，我們並沒有在裏面放入額外的套件(例如 redux, router)，希望可以讓你用最簡單的環境開始學習 React

## 特色 feature

* [react 16.8](https://github.com/facebook/react)
* [webpack 4](https://github.com/webpack/webpack)
* [babel 7](https://github.com/babel/babel)
* [eslint](http://eslint.org)

## 需求配置 requirement
* node `^6.11.5`
* npm `^3.10.10`

## 開始 getting start

先確定好安裝了 node 6.11.5 以上的版本，接著就可以輸入以下指令

```bash
$ git clone https://github.com/ReactMaker/simple_react_start_kit_2017
$ cd simple_react_start_kit_2017
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

如果一切成功，就會看到以下畫面，並且瀏覽器會打開的範例頁面

![Imgur](https://i.imgur.com/MLcE6SO.png)

開發當中最常用到的是 `npm start` 指令，我們還有一些其他的指令要介紹給你知道

| `npm run <script>` | 說明                                                                         |
|--------------------|------------------------------------------------------------------------------|
| `start`            | 啟動網站在 8000 port                                                         |
| `dist`             | 編譯整個網站成品到 dist 資料夾下                                             |
| `lint`             | 檢查所有的 js 檔案有沒有符合 coding style                                    |
| `lint:fix`         | 檢查所有的 js 檔案有沒有符合 coding style ，如果是一些簡單的錯誤就會嘗試修復 |
| `deploy`           | 編譯整個網站成品後，上傳至Github靜態頁面，https://[Github 帳號].github.io/[Repositories Name]/#/ |


## Docker


如果想要把專案 build 到 docker 上面跑，請執行這條命令
```
npm run build:docker
```
輸入完命令之後會建立 docker image 名稱為 `reactdocker`

![](https://i.imgur.com/LISz99c.png)

我們可以透過以下指令把映像檔跑起來

```
docker run --name reactmaker -d -P reactdocker
```

因為我是用`-P`參數自動分配port，所以跑起來之後輸入 `docker ps` 察看系統給我哪個 port

![](https://i.imgur.com/Fww1ncw.png)

接著就可以在瀏覽器輸入localhost:32768看到我們包好的網頁了

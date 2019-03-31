# Q3. [入門] 靜態版型怎麼套 React

## 如何使用

> 請確定電腦中已有 node.js 環境以及使用 npm 或是 yarn 等套件管理工具

1. `git clone` 後使用指令 `yarn install` 或是 `npm install` 下載必須 packages
2. 執行 `yarn start` 或是 `npm run start` 查看、`yarn build` 或是 `npm run build` 製作 production 部署檔案

## 作業製作過程

基於上週製作的 boilerplate 做延伸

1. 新增＆設定 `.babelrc` 檔案確保能編譯 jsx 語法
2. 加入 `css-loader`、`style-loader`、`sass-loader`、`node-sass` 以使用 sass 編寫樣式，並採用 `node-sass` 編譯
3. 加入此版使用的圖片，並設定 webpack 進入點、輸出點等屬性（之前沒填寫，採用 webpack 預設值）
4. 設定 webpack 使之能夠編譯 `.jsx` 結尾的檔案
5. 將 components、樣式加入到專案中，完成

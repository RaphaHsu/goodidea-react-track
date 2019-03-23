+ 下述情境建立在已有Node.js及NPM的開發環境下方可執行

1.  初始化一個package.json
> 在fetch且clone該專案後，下「npm init -y」指令，來生成package.json。
2. 安裝babel
 > 藉由「npm install --save-dev  @babel/core @babel/cli babel-preset-react-app 」來安裝。
3. 將node_modules給忽略掉
> 在clone下來的專案底下生成一個「.ignore」並新增下列內容。
> + 「node_modules」
4. 獲取react(藉由CDN方式來獲取)
> 在clone下來的專案底下生成一個「index.html」並新增下列script。
``` JavaScript
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```
> 其餘設定及全貌可參考該[範例](https://github.com/PenguinRun/goodidea-react-track/blob/master/index.html)。
5. 使用babel
> + 首先，按照[官方文件 ](https://reactjs.org/docs/add-react-to-a-website.html#run-jsx-preprocessor)所述，我們先建立一個`src`的資料夾。
> + 在src當中生成名為「hello.js」的檔案，其檔案內容可參考該[文件](https://github.com/PenguinRun/goodidea-react-track/blob/master/src/hello.js)。
> + 接續，使用該指令「npx babel --watch src --out-dir . --presets babel-preset-react-app/prod」來將在`src`資料夾中所產生的.js檔案，經由babel將JSX檔案編譯成若使用者的瀏覽器過舊或不支援JS新語法時所能理解的JS語法。

6. 設定完成，全貌可參考該[專案](https://github.com/PenguinRun/goodidea-react-track)

> 附註，若藉由其他線上編譯平台建立可參考：
>  + [codesandbox](https://codesandbox.io/embed/mmwq5jzx7j?fontsize=14)
> + [stackblitz](https://stackblitz.com/edit/react-ejvkzb?embed=1&file=index.js)

參考資料：
+ [React官方文件](https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)
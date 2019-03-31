- 初始化
下載後 npm install ，安裝 package.json 的相關套件

- npm start
跑 server 並看到修改後的成果

- npm run webpack
產生靜態檔

嘗試將版面切分
原則爲 App.js 與 main.scss 爲集合所有的 js 與 scss 的主檔案，然後在最外面要渲染的 index.js import 這兩個檔案就可以
將 component 以看得到的四個區塊爲切分，每一個 component 都有一個對應的 scss 檔案

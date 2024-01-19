# NTUPA Equipment Booking System

<p align="center">
<img src="https://github.com/leolinpotato/NTUPA-Equipment-Booking-System/blob/main/src/demo_img.png" width="700"/>
</p>

## Demo 影片連結：https://youtu.be/OKNkT5EG5AM
## 簡介
動機：
我本身是台大PA組的組員，有鑒組上的器材租借仍是透過紙本作業，我也曾遭遇過組上器材丟失，卻由於未完善登記租借紀錄造成責任難以劃分的情形。因此，希望設計一套器材租借系統妥善管理。
功能：
1. Borrow / Return
租借 / 歸還者在租借 / 歸還前須先填寫一份表單，租借表單的內容包含非必填的活動、活動日期(range)、活動地點、活動負責人，以及必填的器材租借人與租借日期等，歸還表單則包含活動、器材歸還人與歸還日期。正確填寫後會 redirect 至器材列表的頁面，可根據器材名稱和 attribute 進行搜尋。器材下方可調整或輸入欲租借 / 歸還的數目。點選器材則會進入該器材的頁面。
2. Equipment List
此頁面會展示所有組上有的器材，一樣可根據器材名稱和 attribute 進行搜尋，不過不具備租借 / 歸還功能，點選器材亦可進入該器材頁面。
3. Equipment Record
這裡展示所有器材的借還紀錄，可根據器材名稱、attribute、借還人、活動名稱進行搜尋，器材的 block 中會顯示該筆記錄是借還是還，以及借還的數量，詳細資訊可點選器材檢視。
4. Equipment Page
每個器材都有自己的 equipment page，其中紀錄該器材的歷史借還紀錄，以表格的方式呈現。
5. Activity Record
顯示所有活動的紀錄，同一次借還會被歸類為同一筆紀錄，同一活動中的不同次借還則會記做不同筆紀錄。點擊活動名稱可進入活動頁面，裡面記載該次活動的所有借還紀錄。可根據時間或租借數目等做排序，也可依據 attribute、借還做 filter。
#### Deploy 連結:https://wpfinalproject-ntupabooking.up.railway.app
## 使用之框架、第三方套件：
React 
React-router-dom	用 useNavigate 來跳轉網址
Antd 			呼叫一些好看的 UI
Axios 			middleware
Express 			後端 server
Nodemon 		自動 restart server
Babel			版本管理
Mongoose		Database
## 安裝步驟
1. 在 `final` 目錄執行 `yarn`
2. 在 `final/frontend` 目錄執行 `yarn`
3. 在 `final/backend` 目錄執行 `yarn`
4. 在 `final/backend` 目錄修改 `.env.defaults`
5. 在 `final/backend` 目錄執行 `yarn server`
6. 在 `final/frontend` 目錄執行 `yarn start`

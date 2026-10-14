# TIB 企業大學 — 網站（首頁 6a + 關於頁）

- `index.html` 首頁
- `about.html` 關於 TIB／創辦人
- `courses.html` 課程資訊（資料在 `courses-data.js`，報名狀態依報名期間自動判斷；`?cat=tax&open=1&loc=台中`）
- `teachers.html` 師資介紹
- `news.html` 最新消息（資料在 `news-data.js`，篩選／分頁邏輯在 `news.js`；網址參數 `?cat=newsletter&year=2026&q=稅` 可直接連結）

> news-data.js 中標記 `sample: true` 的條目為示意資料，上線前請替換。

可直接部署的靜態網頁：`index.html` + `styles.css` + `main.js`，無需建置工具。

## 上線前請替換
- **圖片**：搜尋 `class="ph"`，將佔位框內容換成 `<img>`（註解已標示建議檔名）：hero.jpg、founder.jpg、書封 ×3。
- **Logo**：`.brand__mark` 目前為文字「TIB」。
- **連結**：`/en/`（英文版）、`docs/charter.pdf`（捐助章程）、`docs/organization.html`（組織架構）尚未建立。
- **期數／書目**：532 期、書目為 2026/10 現況，需隨網站更新。

## 響應式
- > 1100px 桌機（設計稿 1280）
- 860–1100px 小筆電／平板橫向
- < 860px 漢堡選單、單欄
- < 640px 手機版（底部固定「來電／培訓洽詢」列）

## 紋理
所有背景紋理（紙紋、帳簿格線、扭索紋、波紋、點陣）皆為 CSS 變數中的內嵌 SVG／漸層，見 `styles.css` 的 `--tex-*`。

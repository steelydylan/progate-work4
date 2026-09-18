const express = require("express");

const app = express();
app.use(express.json());

// サーバー処理が必要になったら、ここに /api/... のエンドポイントを追加する

// エラーハンドリング（エンドポイントは必ずこれより上に追加する）
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "サーバーでエラーが発生しました" });
});

app.listen(3000, () => {
  console.log("API server running at http://localhost:3000/");
});

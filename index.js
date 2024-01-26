const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Modification du code puis un push ip avec ngrok");
});

module.exports = app.listen(process.env.PORT || 4000, () =>
  console.log(`Running on http://localhost:4000`)
);
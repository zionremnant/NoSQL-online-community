const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

app.use((err, req, res, next) => {
  console.log(err.statusCode, err.message);
  res.status(err.statusCode || 500).json({
    status: "error",
    statusCode: err.statusCode,
    message: err.message,
  });
});

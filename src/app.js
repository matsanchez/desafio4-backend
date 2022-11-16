const express = require("express");
const PORT = 8080;
const app = express();
const productsRouter = require("./routes/routes.products");

app.use(express.static("public"));
app.use(express.json());
app.use("/api/productos", productsRouter);

app.listen(PORT, () => {
  console.log(`>>>>> 🚀 Server Up! Port: ${PORT} <<<<<`);
});

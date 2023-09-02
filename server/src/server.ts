import express from "express";

const port = 5000;

// REST OBJECT
const app = express();

// MIDDLEWARES
app.use(express.json());

// REST GET METHOD
app.get("/", (req, res) => {
  res.send("Wenn Mark Recopelacion");
});

app.listen(port, () => {
  console.log(`Sever is running http://localhost:${port}`);
});

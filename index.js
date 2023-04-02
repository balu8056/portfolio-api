import express from "express";

const app = express();
const port = 9000;

app.use("/", (req, res) => {
  res.json({ message: "Helloooo" });
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
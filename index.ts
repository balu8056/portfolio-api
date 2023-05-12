import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import infoRouter from "./src/routes/infoRouter";
import experienceRouter from "./src/routes/experienceRouter";
import highlightsRouter from "./src/routes/highlightsRouter";
import blogsRouter from "./src/routes/blogsRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 9000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hi... This is bala's portfolio API" });
});

app.use("/info", infoRouter);
app.use("/experience", experienceRouter);
app.use("/highlights", highlightsRouter);
app.use("/blogs", blogsRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

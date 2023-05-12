import { Request, Response } from "express";

const getInfo = (req: Request, res: Response) => {
  return res.json({ from: "info" });
};

export default { getInfo };

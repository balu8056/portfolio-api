import { Request, Response } from "express";

const getHighlights = (req: Request, res: Response) => {
  return res.json({ highlights: "highlights" });
};

export default { getHighlights };

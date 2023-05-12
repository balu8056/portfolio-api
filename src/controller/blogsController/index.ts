import { Request, Response } from "express";

const getBlogs = (req: Request, res: Response) => {
  res.json({ blogs: [] });
};

const getBlogById = (req: Request, res: Response) => {
  const blogId = req.params.id;
  res.json({ blog: blogId });
};

export default { getBlogs, getBlogById };

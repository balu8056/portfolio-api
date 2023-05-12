import { Router } from "express";
import blogsController from "../../controller/blogsController";

const blogsRouter: Router = Router();

blogsRouter.get("/", blogsController.getBlogs);

blogsRouter.get("/:id", blogsController.getBlogById);

export default blogsRouter;

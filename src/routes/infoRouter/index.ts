import { Router } from "express";
import devInfoController from "../../controller/infoController";

const devInfo: Router = Router();

devInfo.get("/", devInfoController.getInfo);

export default devInfo;

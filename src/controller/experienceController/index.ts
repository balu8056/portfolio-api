import { Request, Response } from "express";

const getExperience = (req: Request, res: Response) =>{
   return res.json({experience:'experience'})
}

export default {getExperience}
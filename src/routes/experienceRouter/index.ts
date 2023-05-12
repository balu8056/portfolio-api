import { Router } from "express";
import devExperienceController from '../../controller/experienceController'

const devExperience: Router = Router();

devExperience.get('/', devExperienceController.getExperience);

export default devExperience;

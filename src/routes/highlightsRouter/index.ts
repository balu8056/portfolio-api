import  {Router} from 'express'
import highlightsController from '../../controller/highlightsController'

const highlights: Router = Router()

highlights.get('/', highlightsController.getHighlights)

export default highlights

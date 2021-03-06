import resumeController from '../controllers/resume_controller';
import authController from '../controllers/auth_controller';

import express from 'express'
const router = express.Router();

router.route('/auth')
      .post(authController.hasAuthorization, resumeController.create)

export default router;

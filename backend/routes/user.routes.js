import express from 'express';
import { test, test1 } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);
router.get('/test1', test1);

export default router;

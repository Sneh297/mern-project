import express from 'express';
import { signout, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verify-user.js';

const router = express.Router();

router.put('/update/:userId', verifyToken, updateUser);
router.post('/signout', signout);

// router.delete('/delete/:userId', verifyToken, deleteUser);

export default router;

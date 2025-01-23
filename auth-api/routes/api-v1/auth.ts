import express from "express";
import {
  getCurrentUser,
  requestMessage,
  verifySignature,
} from "../../controllers/auth";
import { authenticate } from "../../middlewares/auth";

const router = express.Router();

router.get("/me", authenticate, getCurrentUser); // Optional
router.post("/request-message", requestMessage);
router.post("/verify-signature", verifySignature);

export default router;

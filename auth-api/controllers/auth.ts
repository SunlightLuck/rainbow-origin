import { randomBytes } from "crypto";
import { Request, Response } from "express";
import { verifyMessage } from "ethers";

import { createSessionOrJWT } from "../utils/jwt";

const nonceStore: Record<string, string> = {}; // Temporary in-memory store for nonce

export const requestMessage = async (req: Request, res: any) => {
  const { walletAddress } = req.body;
  if (!walletAddress) {
    return res.status(400).json({ error: "Wallet address is required" });
  }
  const nonce = randomBytes(16).toString("hex"); // Generate a unique nonce
  nonceStore[walletAddress] = nonce;
  const message = `Sign this message to authenticate the app. Nonce: ${nonce}`;
  return res.status(200).json({ message });
};

export const verifySignature = async (req: Request, res: any) => {
  const { walletAddress, signature } = req.body;
  if (!walletAddress || !signature) {
    return res
      .status(400)
      .json({ error: "Wallet address and signature are required" });
  }
  const nonce = nonceStore[walletAddress];
  if (!nonce) {
    return res.status(400).json({ error: "Invalid nonce or wallet address" });
  }
  const message = `Sign this message to authenticate the app. Nonce: ${nonce}`;
  try {
    // Recover the address from the signature
    const recoveredAddress = verifyMessage(message, signature);
    if (recoveredAddress.toLowerCase() !== walletAddress.toLowerCase()) {
      return res.status(401).json({ error: "Invalid signature" });
    }
    // Clear the nonce to prevent replay attacks
    delete nonceStore[walletAddress];
    // Create a session for the user (or generate a JWT)
    const token = createSessionOrJWT(walletAddress);

    return res.status(200).json({ success: true, token: token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to verify signature" });
  }
};

export const getCurrentUser = async (req: Request, res: any) => {
  return res.status(201).json({ walletAddress: "0x" });
};

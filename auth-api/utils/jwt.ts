import jwt from "jsonwebtoken";

export const createSessionOrJWT = (walletAddress: string) => {
  if (!process.env.JWT_SECRET) return null;

  // Generate a JWT or create a session in your backend
  const payload = {
    user: {
      walletAddress,
    },
  };

  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "2 days",
  });

  return jwtToken; // Replace with your session handling logic
};

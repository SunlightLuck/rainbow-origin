import jwt from "jsonwebtoken";

export const authenticate = (req: any, res: any, next: any) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ error: "Internal Server Error" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // Attach user info to request
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // set in .env

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" }); // 1 hour expiry
};

export const verifyToken = (token: string) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
  } catch (err) {
    console.error("JWT verification failed:", err);
    return null;
  }
};

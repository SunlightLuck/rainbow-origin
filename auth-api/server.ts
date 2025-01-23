import dotenv from "dotenv";
dotenv.config();

// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from "express";
import cors from "cors";

// Load Routes
import auth from "./routes/api-v1/auth";

// Create an Express application
const app = express();

// Cors
app.use(cors()); // To Do: Specify the web app url

// Body Parser
app.use(express.json());

// Specify the port number for the server
const port = process.env.PORT || 3000;

// Set Routes
app.use("/api/auth", auth);

// Define a route for the root path ('/')
app.get("/", (req: Request, res: Response) => {
  // Send a response to the client
  res.send("The Root route of Dify web3 authentication system");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});

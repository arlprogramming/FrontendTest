import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

//Middleware
app.use(cors());
app.use(express.json()); //supaya bisa menerima request format json

//setelah membuat routes lalu panggil di index.js ini
app.use(UserRoute);

//port 5000 dan callback dan pesan : "Server up and running..."
app.listen(5000, () => console.log("Server up and running..."));

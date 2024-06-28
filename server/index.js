import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRoutes from "./routes/User.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: 'true' }));


app.use("/api/user/", UserRoutes);
// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});


app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello developers from gfg',
    });
});

const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
};

const startServer = async () => {
    try {
        console.log("MONGODB_URL:", process.env.MONGODB_URL);  // Check if the URL is loaded
        connectDB();
        app.listen(8080, () => console.log('Server running at port 8080'));
    } catch (err) {
        console.log(err);
    }
};

startServer();




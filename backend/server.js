import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Connect DB and Cloudinary
connectDB();
connectCloudinary();

// ✅ Allow specific frontend origins
const allowedOrigins = [
  "http://localhost:5173", // 🛠️ Local frontend (development)
  "https://prescripto-frontend.onrender.com", // 🟢 Replace with your deployed frontend domain
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        // Allow requests like Postman (no origin)
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`❌ CORS not allowed for this origin: ${origin}`));
      }
    },
    credentials: true, // ✅ Allow cookies/auth headers
  })
);

// ✅ Handle preflight OPTIONS requests
app.options("*", cors());

// Middlewares
app.use(express.json());

// API routes
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

// Test route
app.get("/", (req, res) => {
  res.send("✅ API Working");
});

// Start server
app.listen(port, () =>
  console.log(`✅ Server started on PORT:${port}`)
);

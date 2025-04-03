import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL =
  "mongodb+srv://capkomal2203:b08vIH76cTvWdjp4@cluster0.qxzyok0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=> app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

// Connect to MongoDB
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

// mongoose.set('useFindAndModify', false);

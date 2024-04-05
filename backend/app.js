import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
dotenv.config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

connectToDatabase().then(() => {
  console.log(`Connected to DB`);
});

const app = express();

app.use('/api/user', userRoutes);
app.listen(3000, () => {
  console.log(`Server Stared on Port 3000`);
});

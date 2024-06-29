import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import authRoutes from './routes/auth.js';
import orderRoutes from './routes/orders.js';
import menuRoutes from './routes/menu.js';
import cors from "cors";

config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/orders', orderRoutes);
app.use('/menu', menuRoutes);

// Connect to MongoDB
connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import contactRoutes from './routes/contact.routes.js';
import admissionQueryRoutes from './routes/admissionQuery.routes.js';
import nccQueryRoutes from './routes/nccQuery.routes.js';

import adminAuthRoutes from './routes/adminAuthRoutes.js';
import hodRoutes from './routes/hod.routes.js';
import studentRoutes from './routes/student.routes.js';
import adminDataRoutes from './routes/adminDataRoutes.js';

const app = express();


// Connect to database
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admission-query', admissionQueryRoutes);
app.use('/api/ncc-query', nccQueryRoutes);

app.use('/api/admin/auth', adminAuthRoutes);
app.use('/api/hod', hodRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/admin/data', adminDataRoutes);


// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;

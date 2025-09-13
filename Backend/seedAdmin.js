// seedAdmin.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from './src/models/Admin.js'; // Use the Admin model that matches the login route

dotenv.config();

async function createAdmin() {
  try {
    // 1. MongoDB connect
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    // 2. Admin details yahan set karo
    const email = 'abhaygupta9696@gmail.com';
    const plainPassword = 'StrongPass123'; // apna password yahan set karo

    // 3. Check if admin already exists
    const existing = await Admin.findOne({ email });
    if (existing) {
      console.log('⚠️ Admin already exists:', existing.email);
      return;
    }

    // 4. Create new admin (password auto-hash hoga pre-save hook se)
    const admin = new Admin({
      email,
      password: plainPassword, // plain password dena hai, schema auto-hash karega
      role: 'admin'
    });

    await admin.save();
    console.log('🎉 Admin created successfully:', email);
  } catch (err) {
    console.error('❌ Error creating admin:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 MongoDB disconnected');
  }
}

createAdmin();

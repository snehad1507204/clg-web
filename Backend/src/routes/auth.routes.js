import express from 'express';
import jwt from 'jsonwebtoken';
import Hod from '../models/Hod.js';
import Student from '../models/Student.js';

const router = express.Router();

// HOD Signup
router.post('/hod/signup', async (req, res) => {
  try {
    const { username, email, password, department } = req.body;
    const existingHod = await Hod.findOne({ email });
    if (existingHod) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    const hod = new Hod({ username, email, password, department });
    await hod.save();
    res.status(201).json({ message: 'HOD registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// HOD Login
router.post('/hod/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hod = await Hod.findOne({ email });
    if (!hod || !(await hod.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: hod._id, role: hod.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Student Signup
router.post('/student/signup', async (req, res) => {
  try {
    const { username, email, password, studentId, department } = req.body;
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    const student = new Student({ username, email, password, studentId, department });
    await student.save();
    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Student Login
router.post('/student/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student || !(await student.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: student._id, role: student.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

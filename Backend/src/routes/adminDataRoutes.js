import express from 'express';
import Contact from '../models/Contact.js';
import AdmissionQuery from '../models/AdmissionQuery.js';
import Event from '../models/Event.js';
import Course from '../models/Course.js';
import Hod from '../models/Hod.js';
import Student from '../models/Student.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

// Apply admin authentication middleware to all routes
router.use(adminAuthMiddleware);

// Get all contacts sorted by newest first
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get contact statistics
router.get('/stats', async (req, res) => {
  try {
    const totalContacts = await Contact.countDocuments();
    const todayContacts = await Contact.countDocuments({
      createdAt: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0))
      }
    });

    res.json({
      success: true,
      data: {
        totalContacts,
        todayContacts
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get all admission queries sorted by newest first
router.get('/admission-queries', async (req, res) => {
  try {
    const queries = await AdmissionQuery.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: queries.length,
      data: queries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get admission query statistics
router.get('/admission-queries/stats', async (req, res) => {
  try {
    const totalQueries = await AdmissionQuery.countDocuments();
    const todayQueries = await AdmissionQuery.countDocuments({
      createdAt: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0))
      }
    });

    res.json({
      success: true,
      data: {
        totalQueries,
        todayQueries
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get all events sorted by newest first
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json({
      success: true,
      count: events.length,
      data: events
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get all courses
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get all hods
router.get('/hods', async (req, res) => {
  try {
    const hods = await Hod.find();
    res.json({
      success: true,
      count: hods.length,
      data: hods
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;

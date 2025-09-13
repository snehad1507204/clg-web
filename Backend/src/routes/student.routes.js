import express from 'express';
import auth from '../middleware/auth.js';
import roleAuth from '../middleware/roleAuth.js';
import AdminUser from '../models/AdminUser.js';
import Event from '../models/Event.js';

const router = express.Router();

// Middleware to allow only Student role
router.use(auth, roleAuth(['student']));

// Get student profile
router.get('/profile', async (req, res) => {
  try {
    const student = await AdminUser.findById(req.user._id).select('-password');
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get attendance records (placeholder - would need Attendance model)
router.get('/attendance', async (req, res) => {
  try {
    // Placeholder response - implement with Attendance model
    res.json({ message: 'Attendance records feature coming soon' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get exam results (placeholder - would need ExamResult model)
router.get('/exam-results', async (req, res) => {
  try {
    // Placeholder response - implement with ExamResult model
    res.json({ message: 'Exam results feature coming soon' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get available events for registration
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find({
      status: 'approved',
      department: req.user.department
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Register for an event
router.post('/events/:id/register', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    if (event.status !== 'approved') {
      return res.status(400).json({ message: 'Event not available for registration' });
    }

    // Check if already registered
    const alreadyRegistered = event.registrations.some(reg => reg.studentId.toString() === req.user._id.toString());
    if (alreadyRegistered) {
      return res.status(400).json({ message: 'Already registered for this event' });
    }

    event.registrations.push({ studentId: req.user._id });
    await event.save();
    res.json({ message: 'Successfully registered for the event' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get study materials (placeholder - would need StudyMaterial model)
router.get('/study-materials', async (req, res) => {
  try {
    // Placeholder response - implement with StudyMaterial model
    res.json({ message: 'Study materials feature coming soon' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

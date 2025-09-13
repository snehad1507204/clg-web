import express from 'express';
import NCCQuery from '../models/NCCQuery.js';

const router = express.Router({
  strict: true
});

// Submit NCC query form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;
    const nccQuery = new NCCQuery({ name, email, phone, course, message });
    await nccQuery.save();

    res.status(201).json({ message: 'NCC query submitted successfully' });
  } catch (error) {
    console.error('Error submitting NCC query:', error.message);
    res.status(500).json({ message: 'Failed to submit NCC query. Please try again.' });
  }
});

// Get all NCC queries (admin only)
router.get('/', async (req, res) => {
  try {
    const queries = await NCCQuery.find().sort({ createdAt: -1 });
    res.json(queries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

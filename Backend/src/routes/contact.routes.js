import express from 'express';
import multer from 'multer';
import path from 'path';
import Contact from '../models/Contact.js';
import sendEmail from '../utils/sendEmail.js';

const router = express.Router({
  strict: true
});

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Submit contact form
router.post('/', upload.single('attachment'), async (req, res) => {
  try {
    const { name, email, phone, location, subject, message } = req.body;
    const attachment = req.file ? req.file.path : null;
    const contact = new Contact({ name, email, phone, location, subject, message, attachment });
    await contact.save();

    // Send email notification (commented out for now)
    /*
    const emailOptions = {
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nSubject: ${subject}\nMessage: ${message}`,
    };

    if (attachment) {
      emailOptions.attachments = [
        {
          filename: req.file.originalname,
          path: attachment,
        }
      ];
    }

    await sendEmail(emailOptions);
    */

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error.message);
    console.error('Full error:', error);
    if (error.response) {
      console.error('Email response:', error.response);
    }
    res.status(500).json({ message: 'Failed to send email. Please try again.' });
  }
});

// Get all contacts (admin only)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Test MongoDB connection
router.get('/test-db', async (req, res) => {
  try {
    const testContact = new Contact({
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      location: 'Test Location',
      subject: 'Test Subject',
      message: 'Test Message'
    });
    await testContact.save();
    await Contact.findByIdAndDelete(testContact._id);
    res.json({ message: 'MongoDB connection successful' });
  } catch (error) {
    console.error('MongoDB test failed:', error.message);
    res.status(500).json({ message: 'MongoDB connection failed', error: error.message });
  }
});

export default router;

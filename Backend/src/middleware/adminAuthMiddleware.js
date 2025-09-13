import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

const adminAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return res.status(401).json({ message: 'Access denied. Invalid token.' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Access denied. Invalid token.' });
  }
};

export default adminAuthMiddleware;

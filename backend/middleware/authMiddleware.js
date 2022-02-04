import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { id } = decoded;
      console.log(id);
      req.user = await User.findById(id).select('-password');

      next();
    } catch (error) {
        res.status(401);
        throw new Error('Not authorized, token failed!');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('No token found!');
  }
});

const isAdmin = asyncHandler (async (req, res, next) => {
  if(req.user && req.user.isAdmin){
    next();
  }else{
    res.status(401);
    throw new Error('Not authorized as admin!');
  }
})




export { protect, isAdmin };

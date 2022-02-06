import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import genereateToken from '../utils/generateToken.js';

const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  const existUser = await User.findOne({ email });

  if (existUser) {
    res.status(400);
    throw new Error('User already exists!');
  }

  const user = await User.create({
    email,
    name,
    password,
  });

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genereateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid user data.');
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genereateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials!');
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  if (req.user) {
    const user = await User.findById(req.user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('No user found!');
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: genereateToken(updateUser._id),
    });
  } else {
    res.status(404);
    throw new Error('No user found!');
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  if (users) {
    res.json(users);
  } else {
    res.status(404);
    throw new Error('Users not found!');
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({message: 'User removed!'});
  } else {
    res.status(404);
    throw new Error('User not found!');
  }
});

export { authUser, registerUser, getUserProfile, updateUser, getUsers, deleteUser };

//TODO: MATCH PASSWORDS, create METHOD, and then use it here (bcrypt)

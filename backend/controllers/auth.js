import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json('User has been created!');
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordCorrect) {
      const token = jwt.sign(
        { name: user.username, id: user._id, isAdmin: user.isAdmin },
        process.env.JWT
      );
      res.json({ status: 'ok', user: token });
    } else {
      res.status(400).json('Wrong password or username!');
    }
  } else {
    res.status(404).json('User not found!');
  }
};

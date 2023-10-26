import User from '../models/userModel.js';
import { errorHandler } from '../utils/error.js';

export const test = (req, res) => {
    res.json({
      message: 'API is working!',
    });
  };
     
  // delete user
export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, 'You can delete only your account!'));
    }
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted...');
    } catch (error) {
      next(error);
    }
  
  }
import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: {
      tpye: String,
      require: true,
      unique: true,
    },
    email: {
      tpye: String,
      require: true,
      unique: true,
    },
    password: {
      tpye: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    biography: {
      type: String,
      required: true,
      trim: true,
    },
    twitter: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.toJSON = function (req, res, next) {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

module.exports = mongoose.model("user", UserSchema);

const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  about: {
    type: String
  },
  image: {
    type: String,
    default: "/images/avatar.svg"
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  password: String,
})

// Password hash middleware.

UserSchema.pre("save", function save(next) {
  const user = this
  if (!user.isModified("password")) {
    return next()
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

// Helper method for validating user's password.
UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword
) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) {
        reject(err) // Reject the promise if there's an error
      } else {
        resolve(isMatch) // Resolve with the result of the password comparison
      }
    })
  })
}

module.exports = mongoose.model("User", UserSchema)

const Entry = require("../models/Entry")
const User = require("../models/User")

module.exports = {
  getIndex: async (req, res) => {
    try {
      const allEntries = await Entry.find().sort({ date: "desc"}).lean();
      const isAuthenticated = req.isAuthenticated()
      res.render("index.ejs", { entries: allEntries, isAuthenticated: isAuthenticated, loggedInUser: req.user })
    } catch (err) {
      console.log(err)
    }
  },
  getUsers: async (req, res) => {
    try {
      const allUsers = await User.find().sort({ date: "desc"}).lean();
      const isAuthenticated = req.isAuthenticated()
      res.render("users.ejs", { users: allUsers, isAuthenticated: isAuthenticated, loggedInUser: req.user})
    } catch (err) {
      console.log(err)
    }
  }
}
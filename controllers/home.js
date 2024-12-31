const Entry = require("../models/Entry")

module.exports = {
  getIndex: async (req, res) => {
    try {
      const allEntries = await Entry.find().populate('userId', 'userName');
      res.render("index.ejs", { entries: allEntries })
    } catch (err) {
      console.log(err)
    }
  }
}
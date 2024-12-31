module.exports = {
  ensureAuth: function (req, res, next) {
    console.log("ensureAuth middleware hit");
    console.log("User:", req.user); // Check if req.user exists
    if (req.isAuthenticated()) {
      return next()
    } else {
      res.redirect('/')
    }
  }
}
const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const entryController = require('../controllers/entries')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, entryController.getEntries)
router.get('/addEntry', ensureAuth, entryController.getEntryForm)
router.post('/addEntry', upload.single("file"), entryController.addEntry)
router.delete('/deleteEntry/:id', entryController.deleteEntry)
router.put('/likeEntry/:id', entryController.likeEntry)
router.get('/:id', ensureAuth, entryController.getEntry)

module.exports = router
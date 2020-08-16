const express = require('express');

const project = require('../constants/project');

const emojis = require('./emojis/emojis.routes');

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    message: project.message,
  });
});

router.use('/emojis', emojis);

module.exports = router;

const express = require('express');
var fs = require('fs');
var files = fs.readdirSync('public/uploads');

const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('bienvenue'));

// Dashboard
router.get('/profile', ensureAuthenticated, (req, res) =>
  res.render('profile', {
    user: req.user
  })
);
router.get('/lists',  (req, res) =>
  res.render('list', { files: files})
);

module.exports = router;

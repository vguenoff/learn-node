const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get('/', storeController.homePage);

router.get('/reverse/:name', (req, res) => {
  // res.send('it works');

  // http://localhost:7777/reverse/wes
  const reversed = [...req.params.name].reverse().join('');
  res.send(reversed)

});

module.exports = router;

const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // const wes = { name: 'Wes', age: 100, cool: true };
  // res.send('Hey it works!');
  // res.json(wes);

  // http://localhost:7777/?name=wes&age=200&cool=true
  // res.send(req.query.name)
  // res.json(req.query)

  // http://localhost:7777/?name=wes
  res.render('hello', {
    name: 'wes',
    dog: req.query.dog,
  });
});

router.get('/reverse/:name', (req, res) => {
  // res.send('it works');

  // http://localhost:7777/reverse/wes
  const reversed = [...req.params.name].reverse().join('');
  res.send(reversed)

});

module.exports = router;

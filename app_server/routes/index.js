const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main')





router.get("/", ctrlMain.index)

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;

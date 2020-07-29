var express = require('express'),
    router  = express.Router(),
    index   = require('../controllers/index'),
    readperson = require('../controllers/readperson');
    //create  = require('../controllers/create');//註冊事件

router.route('/').get(index);
router.route('/readperson').get(readperson);


module.exports = router;//將此模組(router)給別的程式用

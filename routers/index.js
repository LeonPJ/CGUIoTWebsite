var express = require('express'),
    Chart   = require('chart.js'),
    router  = express.Router(),

    index   = require('../controllers/index'),
    readperson = require('../controllers/readperson'),
    readpersonhistory = require('../controllers/readpersonhistory');
    //create  = require('../controllers/create');//註冊事件

router.route('/').get(index);
router.route('/readperson').get(readperson);
router.route('/readpersonhistory').get(readpersonhistory);

module.exports = router;//將此模組(router)給別的程式用

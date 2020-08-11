var express = require('express'),
    Chart   = require('chart.js'),
    router  = express.Router(),
    Chart   = require('chart.js'),
    index   = require('../controllers/index'),
    readperson = require('../controllers/readperson'),
    readpersonhistory = require('../controllers/readpersonhistory'),
    readi = require('../controllers/readi'),
    readihistory = require('../controllers/readihistory'),
    readv = require('../controllers/readv'),
    readvhistory = require('../controllers/readvhistory'),
    readp = require('../controllers/readp'),
    readphistory = require('../controllers/readphistory'),
    readpf = require('../controllers/readpf'),
    readpfhistory = require('../controllers/readpfhistory'),
    readstatus = require('../controllers/readstatus'),
    readcontrolstatus = require('../controllers/readcontrolstatus');
    //create  = require('../controllers/create');//註冊事件

router.route('/').get(index);
router.route('/readperson').get(readperson);
router.route('/readpersonhistory').get(readpersonhistory);
router.route('/readi').get(readi);
router.route('/readihistory').get(readihistory);
router.route('/readv').get(readv);
router.route('/readvhistory').get(readvhistory);
router.route('/readp').get(readp);
router.route('/readphistory').get(readphistory);
router.route('/readpf').get(readpf);
router.route('/readpfhistory').get(readpfhistory),
router.route('/readstatus').get(readstatus);
router.route('/readcontrolstatus').get(readcontrolstatus);

module.exports = router;//將此模組(router)給別的程式用

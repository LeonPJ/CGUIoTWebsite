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
    readcontrolstatus = require('../controllers/readcontrolstatus'),
    readstatus = require('../controllers/readstatus'),
    readcontrolstatus = require('../controllers/readcontrolstatus'),
    readlightonestatus = require('../controllers/readlightonestatus'),
    readlighttwostatus = require('../controllers/readlighttwostatus'),
    readlightthreestatus = require('../controllers/readlightthreestatus'),
    readlightfourstatus = require('../controllers/readlightfourstatus'),
    readlightfivestatus = require('../controllers/readlightfivestatus'),
    readlightsixstatus = require('../controllers/readlightsixstatus'),
    readenvironmentco = require('../controllers/readenvironmentco'),
    readenvironmentlpg = require('../controllers/readenvironmentlpg'),
    readenvironmentco2 = require('../controllers/readenvironmentco2'),
    readenvironmenttemp = require('../controllers/readenvironmenttemp'),
    readenvironmenthum = require('../controllers/readenvironmenthum'),
    readenvironmentflame = require('../controllers/readenvironmentflame'),
    readenvironmentcohistory = require('../controllers/readenvironmentcohistory'),
    readenvironmentlpghistory = require('../controllers/readenvironmentlpghistory'),
    readenvironmentco2history = require('../controllers/readenvironmentco2history'),
    readenvironmenttemphistory = require('../controllers/readenvironmenttemphistory'),
    readenvironmenthumhistory = require('../controllers/readenvironmenthumhistory'),
    readenvironmentflamehistory = require('../controllers/readenvironmentflamehistory');
    //create  = require('../controllers/create');//註冊事件

router.route('/').get(index);
//人數狀態
router.route('/readperson').get(readperson);
//智慧插座狀態
router.route('/readi').get(readi);
router.route('/readv').get(readv);
router.route('/readp').get(readp);
router.route('/readv').get(readv);
router.route('/readp').get(readp);
router.route('/readpf').get(readpf);
router.route('/readstatus').get(readstatus);
router.route('/readcontrolstatus').get(readcontrolstatus);
//電燈狀態
router.route('/readlightonestatus').get(readlightonestatus);
router.route('/readlighttwostatus').get(readlighttwostatus);
router.route('/readlightthreestatus').get(readlightthreestatus);
router.route('/readlightfourstatus').get(readlightfourstatus);
router.route('/readlightfivestatus').get(readlightfivestatus);
router.route('/readlightsixstatus').get(readlightsixstatus);
//環境監控狀態
router.route('/readenvironmentco').get(readenvironmentco);
router.route('/readenvironmentlpg').get(readenvironmentlpg);
router.route('/readenvironmentco2').get(readenvironmentco2);
router.route('/readenvironmenttemp').get(readenvironmenttemp);
router.route('/readenvironmenthum').get(readenvironmenthum);
router.route('/readenvironmentflame').get(readenvironmentflame);
//人數歷史資料
router.route('/readpersonhistory').get(readpersonhistory);
//智慧插座歷史資料
router.route('/readihistory').get(readihistory);
router.route('/readvhistory').get(readvhistory);
router.route('/readphistory').get(readphistory);
router.route('/readpfhistory').get(readpfhistory);
//環境監控歷史資料
router.route('/readenvironmentcohistory').get(readenvironmentcohistory);
router.route('/readenvironmentlpghistory').get(readenvironmentlpghistory);
router.route('/readenvironmentco2history').get(readenvironmentco2history);
router.route('/readenvironmenttemphistory').get(readenvironmenttemphistory);
router.route('/readenvironmenthumhistory').get(readenvironmenthumhistory);
router.route('/readenvironmentflamehistory').get(readenvironmentflamehistory);
module.exports = router;//將此模組(router)給別的程式用

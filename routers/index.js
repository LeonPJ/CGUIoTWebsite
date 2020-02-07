var express = require('express'),
    router  = express.Router(),
    index   = require('../controllers/index'),//註冊頁面
    create  = require('../controllers/create');//註冊事件

router.route('/').get(index);//註冊頁面
router.route('/Create').post(create);//註冊事件

module.exports = router;

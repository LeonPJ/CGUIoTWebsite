var express = require('express'),
    router  = express.Router(),
    index   = require('../controllers/index');
    create  = require('../controllers/create')

router.route('/').get(index);//註冊頁面
router.route('/SignIn').post(create);//註冊事件

module.exports = router;

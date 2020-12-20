'use strict';
exports.__esModule = true;
var express_1 = require('express');
var router = express_1.Router();
var UserController = require('src/modules/user/user.controller');
router.get('/list', UserController.getUsersList);
exports['default'] = router;
//# sourceMappingURL=user.router.js.map
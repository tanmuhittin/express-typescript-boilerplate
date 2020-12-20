'use strict';
exports.__esModule = true;
exports.getUsersList = void 0;
var UserService = require('src/modules/user/user.service');
function getUsersList(req, res) {
	var list = UserService.getUserList();
	return res.send(list);
}
exports.getUsersList = getUsersList;
//# sourceMappingURL=user.controller.js.map
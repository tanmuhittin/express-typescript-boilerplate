'use strict';
exports.__esModule = true;
exports.getUserList = void 0;
var UserProvider = require('src/modules/user/user.provider');
function getUserList() {
	return UserProvider.getUsers();
}
exports.getUserList = getUserList;
//# sourceMappingURL=user.service.js.map
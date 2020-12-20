import * as UserProvider from './user.provider';

export function getUserList() {
	return UserProvider.getUsers();
}

import { Response, Request } from 'express';
import * as UserService from './user.service';

export function getUsersList(req: Request, res: Response) {
	const list = UserService.getUserList();
	console.log('asd');
	return res.send(list);
}
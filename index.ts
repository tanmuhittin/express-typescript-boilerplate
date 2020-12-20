import * as express from 'express';

const PORT = process.env.port || 3000;
const app = express();

import UserModule from './src/modules/user/user.module';

UserModule(app);

app.listen(PORT, () => {
	console.log(`Listening at ${PORT}`);
});
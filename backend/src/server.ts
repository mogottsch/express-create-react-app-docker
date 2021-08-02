process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import dotenv from 'dotenv';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';

validateEnv();
dotenv.config();

const app = new App();
app.init([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.app.on('ready', () => {
  app.listen();
});

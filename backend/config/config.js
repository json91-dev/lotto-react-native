require('dotenv').config();//instatiate environment variables

let CONFIG = {} //Make this global to use all over the application

CONFIG.app          = process.env.APP   || 'development';
CONFIG.port         = process.env.PORT  || '5000';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mongo';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_port      = process.env.DB_PORT       || '27017';
CONFIG.db_name      = process.env.DB_NAME       || 'letsee';
CONFIG.db_user      = process.env.DB_USER       || '';
CONFIG.db_password  = process.env.DB_PASSWORD   || '';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'Rgtdk4PsDSE';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '7d';

CONFIG.api_url              = process.env.API_URL               || 'https://intra.letsee.io/api/app/';

module.exports = CONFIG;

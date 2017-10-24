switch (process.env.NODE_ENV) {
    case 'dev':
        module.exports = require('./settings/webpack.config.dev.js');
        break;
    case 'prod':
        module.exports = require('./settings/webpack.config.prod.js');
        break;
    default:
        break;
}
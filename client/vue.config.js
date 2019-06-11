const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../resources/server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
            }
        }
    }
};
const path = require('path');
const express = require('express');
const compression = require('compression');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '../dist/index.html');
    const publicPath = express.static(path.join(__dirname, '../dist'));

    // Redirect HTTP to HTTPS
    app.use(function(req, res, next) {
      if (req.headers.hasOwnProperty('x-forwarded-proto') &&
          req.headers['x-forwarded-proto'] !== 'https') {
        res.redirect('https://' + req.hostname + req.originalUrl);
      }
      else {
        next();
      }
    });

    app.use(compression());
    
    // Serve static files
    app.use(publicPath);

    // Serve application
    app.use(function(req, res) {
      res.sendFile(indexPath);
    });

    return app;
  }
};

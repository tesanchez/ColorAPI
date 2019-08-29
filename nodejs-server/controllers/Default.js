'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.colorGET = function colorGET (req, res, next) {
  Default.colorGET(req.swagger.params, res, next);
};

module.exports.colorPOST = function colorPOST (req, res, next) {
  Default.colorPOST(req.swagger.params, res, next);
};

'use strict';

var utils = require('../utils/writer.js');
var ServicesOrders = require('../service/ServicesOrdersService');

module.exports.deleteServiceOrder = function deleteServiceOrder (req, res, next) {
  var id = req.swagger.params['id'].value;
  ServicesOrders.deleteServiceOrder(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllServiceOrders = function getAllServiceOrders (req, res, next) {
  ServicesOrders.getAllServiceOrders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrderById = function getOrderById (req, res, next) {
  var id = req.swagger.params['id'].value;
  ServicesOrders.getOrderById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.placeServiceOrder = function placeServiceOrder (req, res, next) {
  var body = req.swagger.params['body'].value;
  ServicesOrders.placeServiceOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateServiceOrder = function updateServiceOrder (req, res, next) {
  var body = req.swagger.params['body'].value;
  ServicesOrders.updateServiceOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

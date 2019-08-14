'use strict';

var utils = require('../utils/writer.js');
var LineItem = require('../service/LineItemService');

module.exports.deleteItem = function deleteItem (req, res, next) {
  var id = req.swagger.params['id'].value;
  LineItem.deleteItem(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getItemById = function getItemById (req, res, next) {
  var id = req.swagger.params['id'].value;
  LineItem.getItemById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

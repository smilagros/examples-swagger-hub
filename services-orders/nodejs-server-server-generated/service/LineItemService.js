'use strict';


/**
 * Deleted a item
 *
 * id Long Item id to delete
 * no response value expected for this operation
 **/
exports.deleteItem = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find item by ID
 * Returns a single item
 *
 * id Long ID of item to return
 * returns Item
 **/
exports.getItemById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "code",
  "quantity" : "quantity",
  "price" : "price",
  "name" : "name",
  "description" : "description",
  "id" : 0,
  "type" : "type",
  "status" : "enabled"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


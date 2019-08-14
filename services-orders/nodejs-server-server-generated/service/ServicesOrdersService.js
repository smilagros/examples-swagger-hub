'use strict';


/**
 * Delete service order by ID
 * For valid response try integer IDs with positive integer value.\\ \\ Negative or non-integer values will generate API errors
 *
 * id Long ID of the order that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteServiceOrder = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve all Services Orders
 * Retrieve all Services Orders
 *
 * returns ServiceOrder
 **/
exports.getAllServiceOrders = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "area" : [ {
    "code" : "code",
    "name" : "name",
    "description" : "description",
    "id" : 6
  }, {
    "code" : "code",
    "name" : "name",
    "description" : "description",
    "id" : 6
  } ],
  "requester" : "requester",
  "orderNumber" : "orderNumber",
  "quantity" : 5,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "numberRequest" : "numberRequest",
  "reference" : "reference",
  "supplier" : [ {
    "code" : "code",
    "telephoneNumber" : "telephoneNumber",
    "address" : "address",
    "name" : "name",
    "description" : "description",
    "id" : 1,
    "status" : "enabled"
  }, {
    "code" : "code",
    "telephoneNumber" : "telephoneNumber",
    "address" : "address",
    "name" : "name",
    "description" : "description",
    "id" : 1,
    "status" : "enabled"
  } ],
  "priceTotal" : 5,
  "paymentMethod" : "paymentMethod",
  "id" : 0,
  "complete" : false,
  "orderDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "Draft"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find Service order by ID
 * For valid response try integer IDs with value >= 1 and <= 10.\\ \\ Other values will generated exceptions
 *
 * id Long ID of item that needs to be fetched
 * returns ServiceOrder
 **/
exports.getOrderById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "area" : [ {
    "code" : "code",
    "name" : "name",
    "description" : "description",
    "id" : 6
  }, {
    "code" : "code",
    "name" : "name",
    "description" : "description",
    "id" : 6
  } ],
  "requester" : "requester",
  "orderNumber" : "orderNumber",
  "quantity" : 5,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "numberRequest" : "numberRequest",
  "reference" : "reference",
  "supplier" : [ {
    "code" : "code",
    "telephoneNumber" : "telephoneNumber",
    "address" : "address",
    "name" : "name",
    "description" : "description",
    "id" : 1,
    "status" : "enabled"
  }, {
    "code" : "code",
    "telephoneNumber" : "telephoneNumber",
    "address" : "address",
    "name" : "name",
    "description" : "description",
    "id" : 1,
    "status" : "enabled"
  } ],
  "priceTotal" : 5,
  "paymentMethod" : "paymentMethod",
  "id" : 0,
  "complete" : false,
  "orderDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "Draft"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add an Service Order
 *
 * body ServiceOrder order added
 * returns ServiceOrder
 **/
exports.placeServiceOrder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "area" : [ {
    "code" : "code",
    "name" : "name",
    "description" : "description",
    "id" : 6
  }, {
    "code" : "code",
    "name" : "name",
    "description" : "description",
    "id" : 6
  } ],
  "requester" : "requester",
  "orderNumber" : "orderNumber",
  "quantity" : 5,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "numberRequest" : "numberRequest",
  "reference" : "reference",
  "supplier" : [ {
    "code" : "code",
    "telephoneNumber" : "telephoneNumber",
    "address" : "address",
    "name" : "name",
    "description" : "description",
    "id" : 1,
    "status" : "enabled"
  }, {
    "code" : "code",
    "telephoneNumber" : "telephoneNumber",
    "address" : "address",
    "name" : "name",
    "description" : "description",
    "id" : 1,
    "status" : "enabled"
  } ],
  "priceTotal" : 5,
  "paymentMethod" : "paymentMethod",
  "id" : 0,
  "complete" : false,
  "orderDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "Draft"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing service order
 *
 * body Item Service Order object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateServiceOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


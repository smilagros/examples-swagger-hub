/**
 * Services Orders API Swagger
 * These are the services for Services Orders
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Item', 'model/ServiceOrder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Item'), require('../model/ServiceOrder'));
  } else {
    // Browser globals (root is window)
    if (!root.ServicesOrdersApiSwagger) {
      root.ServicesOrdersApiSwagger = {};
    }
    root.ServicesOrdersApiSwagger.ServicesOrdersApi = factory(root.ServicesOrdersApiSwagger.ApiClient, root.ServicesOrdersApiSwagger.Item, root.ServicesOrdersApiSwagger.ServiceOrder);
  }
}(this, function(ApiClient, Item, ServiceOrder) {
  'use strict';

  /**
   * ServicesOrders service.
   * @module api/ServicesOrdersApi
   * @version 1.0
   */

  /**
   * Constructs a new ServicesOrdersApi. 
   * @alias module:api/ServicesOrdersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteServiceOrder operation.
     * @callback module:api/ServicesOrdersApi~deleteServiceOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete service order by ID
     * For valid response try integer IDs with positive integer value.\\ \\ Negative or non-integer values will generate API errors
     * @param {Number} id ID of the order that needs to be deleted
     * @param {module:api/ServicesOrdersApi~deleteServiceOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteServiceOrder = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteServiceOrder");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/serviceorder/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllServiceOrders operation.
     * @callback module:api/ServicesOrdersApi~getAllServiceOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceOrder} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all Services Orders
     * Retrieve all Services Orders
     * @param {module:api/ServicesOrdersApi~getAllServiceOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceOrder}
     */
    this.getAllServiceOrders = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = ServiceOrder;

      return this.apiClient.callApi(
        '/service-order', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderById operation.
     * @callback module:api/ServicesOrdersApi~getOrderByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceOrder} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Service order by ID
     * For valid response try integer IDs with value &gt;&#x3D; 1 and &lt;&#x3D; 10.\\ \\ Other values will generated exceptions
     * @param {Number} id ID of item that needs to be fetched
     * @param {module:api/ServicesOrdersApi~getOrderByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceOrder}
     */
    this.getOrderById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrderById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = ServiceOrder;

      return this.apiClient.callApi(
        '/serviceorder/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the placeServiceOrder operation.
     * @callback module:api/ServicesOrdersApi~placeServiceOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceOrder} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an Service Order
     * @param {module:model/ServiceOrder} body order added
     * @param {module:api/ServicesOrdersApi~placeServiceOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceOrder}
     */
    this.placeServiceOrder = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling placeServiceOrder");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = ServiceOrder;

      return this.apiClient.callApi(
        '/service-order', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServiceOrder operation.
     * @callback module:api/ServicesOrdersApi~updateServiceOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing service order
     * @param {module:model/Item} body Service Order object that needs to be updated
     * @param {module:api/ServicesOrdersApi~updateServiceOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateServiceOrder = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateServiceOrder");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/service-order', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

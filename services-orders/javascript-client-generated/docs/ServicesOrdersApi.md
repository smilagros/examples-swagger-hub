# ServicesOrdersApiSwagger.ServicesOrdersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteServiceOrder**](ServicesOrdersApi.md#deleteServiceOrder) | **DELETE** /serviceorder/{id} | Delete service order by ID
[**getAllServiceOrders**](ServicesOrdersApi.md#getAllServiceOrders) | **GET** /service-order | Retrieve all Services Orders
[**getOrderById**](ServicesOrdersApi.md#getOrderById) | **GET** /serviceorder/{id} | Find Service order by ID
[**placeServiceOrder**](ServicesOrdersApi.md#placeServiceOrder) | **POST** /service-order | Add an Service Order
[**updateServiceOrder**](ServicesOrdersApi.md#updateServiceOrder) | **PUT** /service-order | Update an existing service order


<a name="deleteServiceOrder"></a>
# **deleteServiceOrder**
> deleteServiceOrder(id)

Delete service order by ID

For valid response try integer IDs with positive integer value.\\ \\ Negative or non-integer values will generate API errors

### Example
```javascript
var ServicesOrdersApiSwagger = require('services_orders_api_swagger');

var apiInstance = new ServicesOrdersApiSwagger.ServicesOrdersApi();

var id = 789; // Number | ID of the order that needs to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteServiceOrder(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the order that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getAllServiceOrders"></a>
# **getAllServiceOrders**
> ServiceOrder getAllServiceOrders()

Retrieve all Services Orders

Retrieve all Services Orders

### Example
```javascript
var ServicesOrdersApiSwagger = require('services_orders_api_swagger');

var apiInstance = new ServicesOrdersApiSwagger.ServicesOrdersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllServiceOrders(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceOrder**](ServiceOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getOrderById"></a>
# **getOrderById**
> ServiceOrder getOrderById(id)

Find Service order by ID

For valid response try integer IDs with value &gt;&#x3D; 1 and &lt;&#x3D; 10.\\ \\ Other values will generated exceptions

### Example
```javascript
var ServicesOrdersApiSwagger = require('services_orders_api_swagger');

var apiInstance = new ServicesOrdersApiSwagger.ServicesOrdersApi();

var id = 789; // Number | ID of item that needs to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of item that needs to be fetched | 

### Return type

[**ServiceOrder**](ServiceOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="placeServiceOrder"></a>
# **placeServiceOrder**
> ServiceOrder placeServiceOrder(body)

Add an Service Order

### Example
```javascript
var ServicesOrdersApiSwagger = require('services_orders_api_swagger');

var apiInstance = new ServicesOrdersApiSwagger.ServicesOrdersApi();

var body = new ServicesOrdersApiSwagger.ServiceOrder(); // ServiceOrder | order added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.placeServiceOrder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ServiceOrder**](ServiceOrder.md)| order added | 

### Return type

[**ServiceOrder**](ServiceOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="updateServiceOrder"></a>
# **updateServiceOrder**
> updateServiceOrder(body)

Update an existing service order

### Example
```javascript
var ServicesOrdersApiSwagger = require('services_orders_api_swagger');

var apiInstance = new ServicesOrdersApiSwagger.ServicesOrdersApi();

var body = new ServicesOrdersApiSwagger.Item(); // Item | Service Order object that needs to be updated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateServiceOrder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Item**](Item.md)| Service Order object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


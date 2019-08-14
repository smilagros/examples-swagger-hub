# ServicesOrdersApiSwagger.LineItemApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteItem**](LineItemApi.md#deleteItem) | **DELETE** /line-item/{id} | Deleted a item
[**getItemById**](LineItemApi.md#getItemById) | **GET** /line-item/{id} | Find item by ID


<a name="deleteItem"></a>
# **deleteItem**
> deleteItem(id)

Deleted a item

### Example
```javascript
var ServicesOrdersApiSwagger = require('services_orders_api_swagger');

var apiInstance = new ServicesOrdersApiSwagger.LineItemApi();

var id = 789; // Number | Item id to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItem(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Item id to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getItemById"></a>
# **getItemById**
> Item getItemById(id)

Find item by ID

Returns a single item

### Example
```javascript
var ServicesOrdersApiSwagger = require('services_orders_api_swagger');

var apiInstance = new ServicesOrdersApiSwagger.LineItemApi();

var id = 789; // Number | ID of item to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of item to return | 

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


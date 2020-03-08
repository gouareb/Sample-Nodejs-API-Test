# Product Store

A NodeJs Express application that servers product store APIs for the customer, contains multiple APIs such as Product, Inventory, ProductList (Can be filtered by Product)

## Getting Started

The App is built and run as below

### Installing and running:

To run the app just intall the required dependencies and and hit node app.js i.e.

---> Go to the project directory and

```
npm install
node app.js
```

### API sources and information:

The APP is to give an idea about how to generate & call GET APIs using nodejs and express. I've initially called a GET API to get the data and create three GET APIs, two reflects the same called API and other aggregated list of called API that is generated from the above two APIs. We can pass in a filter that filters the product list from the available all the list of products.
|
|\_\_ APIS : /api/products or /api/products/:productName
/api/inventory or /api/inventory/:invetoryName
/api/productList
or
/api/productList/:productName

Data obtained for each of the APIs is as follows for example:

### /api/products:

```
[
    {
      "name": "shirt",
      "price": 15
    },
    ....
```

### /api/products/:productName:

```
[
    {
      "name": "shirt",
      "price": 15
    },
```

### /api/inventory

```
{
    "inventory": [
      {
        "name": "shirt",
        "inventory": 12
      },
    ....
```

### /api/inventory/:inventoryName

```
{
    "inventory": [
      {
        "name": "shirt",
        "inventory": 12
      }
```

### /productList

And repeat

```
[
    {
      "name": "shirt",
      "price": 15,
      "inventory": 12
    },
```

additional parameter can be passed into url to filter the list as:
/api/product/shirt i.e. /api/product/:productName

The application also handles the errors nicely and displays it to user as a HTML clearly and was built using pub framework

when a filter was provided and the list doesn't contain the product then a response is generated as follows:

### Error Handling

```
## Please Verify the data entered
## {error.stack: No Data Matched with the list}
```

other errors with related to code are also thrown in the same way.

The application api call without defining the API i.e. just using a GET '/' or GET '/api/' will return a response as below

## Welcome Message

```
{
    "message": "hooray! welcome to our product api!"
}
```

## server hosting and port

The server when we run

```
node app.js
```

is hosted at, FYI we can easily change the port when we host it by changing the value of port in

```
----
   |__ app.js file
```

change the port number to the one that you wanted, I have here set the port to 8080

```
http://localhost:8080/
```

follow shown API endpoints to see the data

## apis

This is the main file and directory structure of the project is as follows which contains the business logic for APIs. And apis is the folder that contains the serice logic for the APIs

```
   |__ app.js file
   |
   |__ lib
        |
        |___ apis
        |      |___ productApi.js
        |      |___ PrdAndInv.js
        |
        |______model
        |        |____ service.js
        |
        |________ repo
                    |___ inventory.js
                    |____ products.js
        
```

### Error Handling

If a wrong end point is entered the service returns a HTML error response

for example

```
calling a wrong endpoint as /api/inventor gives as follows:

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Error</title>
    </head>
    <body>
        <pre>Cannot GET /api/inventor</pre>
    </body>
</html>
```

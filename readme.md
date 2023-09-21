
# Express HTTP CRUD API

***

## Description

In this project, we build express based Todo API which perform Create, Read, Update and Delete (CRUD) oprations. It store and extract data from PostgreSQL DataBase.

***

## Technology Used

*  **Node JS** - JavaScript language For backend

*  **Express JS** - For Server

*  **PostgreSQL** - For Database

*  **Sequelize** - For ORM

*  **Yup** - NodeJs Library for validation

***

## Installation

- Clone this repository into local system using:-

```js

git  clone

```

- Update **.env** file and use your own database informationto run this.

Content To Change

```

DATABASE= <Database Name>

DB_USER= <Database Owner>

DB_PW= <Database Password>

HOST= <Host>

```
- Install node and other dependency using:-

npm  init

```

- Now run the server using:-

```js

npm  start

```

***

## API Endpoint

  

### 1. Get all todos

>  **URL-** /todos


>  **Method-** GET

  

-  **Respose =>**

```json

{

"todos": [

{

"id": 1,

"text": "Todo 1",

"isCompleted": false

},

{

"id": 2,

"text": "Todo 2",

"isCompleted": false

},

{

"id": 3,

"text": "Todo 3",

"isCompleted": true

}

]

}

```

### 2. Get todo by ID

>  **URL-** /todos/`id`

  

>  **Method-** GET

  

>  **Validation**

`id` => Number | Required

  
  

-  **Respose =>**

**URL => " /todos/2 "**

```json

{

"id": 2,

"text": "Todo 2",

"isCompleted": false

}

```
 

### 3. Create todo

>  **URL-** /todos

  

>  **Method-** POST

  

**Request Body =>**

  

```json

  

{

"text": "Work 4",

"isCompleted": false

}

```


>  **Validation**

`text` => Text | Required

`isCompleted` => Boolean | Required

  
  

-  **Respose =>**

  

```json

{

"id": 3,

"text": "Learn SQL",

"isCompleted": false

}

```

**Id is automatically genrated**

  

### 4. Update todo

>  **URL-** /todos/`id`

  

>  **Method-** PUT

  

**Request Body =>**
  

```json

{

"id":3,

"text": "Learn SQL",

"isCompleted": true

}

```

  

  **Validation**

`id` => Number| Required

`text` => Text | Required

`isCompleted` => Boolean | Required

  
  

  **Respose =>**

**URL => " /todos/3 "**

```json

{

"id": 3,

"text": "Learn SQL",

"isCompleted": true

}

```

  

### 5. Delete todo

>  **URL-** /todos/`id`

  

>  **Method-** DELETE

  

>  **Validation**

`id` => Number| Required

  
  
  

  **Respose =>**

**URL => " /todos/3 "**

```json

{

"message": "Todo is deleted"

}

```
---
title: "Use Dynamoose in NodeJS"
description: "Learn how to make access DynamoDB easily"
banner: "/images/posts/use-dynamoose-in-nodejs/banner.jpeg"
tags: ["AWS"]
date: 5 January 2022
---

# Use Dynamoose in NodeJS

### Learn how to make access DynamoDB easily

![](/images/posts/use-dynamoose-in-nodejs/banner.jpeg)Photo by [RODNAE Productions](https://www.pexels.com/@rodnae-prod?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [Pexels](https://www.pexels.com/photo/a-home-key-over-a-carton-box-8292772/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

Currently, we are using `aws-sdk` to interact with the **DynamoDB**.

As DynamoDB is a NoSQL key-value storage it presents a lot of issues when working in a team. There is a lot of scope of errors in the syntax of how we interact with the database.

We needed a consistent way of doing things. And today we will see how we did it with an awesome library named `Dynamoose`

## Problem with Current Approach

Honestly speaking even after working with dynamodb for quite some time now I find it hard to get the hang of it. Especially some special properties we have to use in order to update a record.

The `ExpressionAttributeNames` and `ExpressionAttributeValues` are themselves another pain to understand and work with.

And guess what? They are not even type-safe!

Let’s take the following example. this code is taken from an actual project where we update a model named `member` . The details are not important. Just look at the syntax!

There are several problems with this code.

```js
const params = {
  TableName: this.tableName,
  Key: {
    Customer: team.Customer,
    Id: team.Id,
  },
  UpdateExpression:
    "set \
        #n= :name,\
        Description = :description,\
        Active= :active,\
        UpdateDate= :updateDate,\
        UpdatedBy= :updatedBy",
  ExpressionAttributeValues: {
    ":active": team.Active ?? false,
    ":name": team.Name,
    ":description": team.Description,
    ":updateDate": Date.now(),
    ":updatedBy": updatedBy,
  },
  ExpressionAttributeNames: { "#i": "Id", "#n": "Name" },
  ConditionExpression: "attribute_exists(Customer) AND attribute_exists(#i)",
  ReturnValues: "ALL_NEW",
};
```

- The `UpdateExpression` and `ConditionExpression` is just a plain string. So if we miss a single character we are basically writing a wrong DB query which will be a nightmare to find out.
- On top of that, we don’t have any kind of `validation` for the models that we are pushing into the database.
- Also, we don’t have any autocomplete
- The API is really hard to understand

## What’s the solution?

There are multiple libraries to solve this exact problem (Because we are not the first ones to feel this pain) and after some digging, I think the best library is `[dynamoose](https://dynamoosejs.com/getting_started/Introduction)` .

## Why Dynamoose is a great choice?

- Typescript support
- Validation support
- Automatic object transformation
- Very intuitive API (Using familiar words like `get`, `put` etc)

This library follows the API style of a hugely popular `mongoose` library(for MongoDB). Maybe you already guessed it from the name :P

Let’s re-write our queries to find out how `dynamose` can improve the quality of our code.

## Step -1: First install the dependency

Let’s install the dependency first

```
npm i dynamoose
```

## Step -2: Create a Model Class

Let’s create a model for our data that will live in the dynamoDB. This is optional. But doing this will produce typescript errors that will keep you safe from any unwanted typo.

```js
import { Document } from "dynamoose/dist/Document";

export class ExampleModel extends Document {
  Id = "";
  Module = "";
  Description = "";
}
```

Pretty simple right?

## Step- 3: Create the schema

Schema means the database specification of the model.

Here we can specify various properties for individual fields. They will later be used for validation and make sure that no dirty data will go into the database.

Some of them are…

`required` → if the property is required or not

`default` → default database value for the property

`validate` → Validation of the field

`getter` and `setter` → How do we want to get back the value of a field

`timestamp` → Automatic `CreatedAt` and `UpdatedAt` value for the DB model (which we use regularly)

So in our case the `ExampleSchema` will be

```js
import * as dynamoose from "dynamoose";

export const ExampleSchema = new dynamoose.Schema(
  {
    Id: {
      type: String,
      hashKey: true,
      required: true,
    },
    Module: {
      type: String,
      rangeKey: true,
      required: true,
    },
    Description: {
      type: String,
      required: false,
      default: "",
    },
  },
  {
    timestamps: {
      createdAt: "CreateDate",
      updatedAt: "UpdateDate",
    },
  }
);
```

Notice at the bottom of the schema we have specified the `timestamps` property. This will automatically generate `timestamp` for us.

## Step 4: Create a Repository

The library follows the MongoDB naming so it identifies its repository as a model. We will use the model but in a smarter way.

We will create a repository to separate all the database logic. Below is an example of how to create functions for `GET`, `CREATE`, and `UPDATE` operations

```js
import * as dynamoose from 'dynamoose';
import { ExampleModel } from './ExampleModel';
import { getTableName } from '@amagroup.io/amag-corelib';
import { Model } from 'dynamoose/dist/Model';
import { ExampleSchema } from './ExampleSchema';
import { CreateExampleRequest } from './create-survey/CreateSurveyRequest';
import { UpdateExampleRequest } from './update-survey/UpdateSurveyRequest';

export default class ExampleRepository {

    private dbInstance: Model<ExampleModel>;

    constructor(environment: string) {
        const tableName = getTableName(environment, 'Example');
        this.dbInstance = dynamoose.model<ExampleModel>(tableName, ExampleSchema);
    }

    createExample = async (request: CreateExampleRequest) => {
        return await this.dbInstance.create({
            Id: request.Id,
            Module: request.Module
        });
    };

    updateExample = async (request: UpdateExampleRequest) => {
        return await this.dbInstance.update({
            Id: request.Id,
            Module: request.Module,
            Description: request.Description
        });
    };

    getExampleById = async (id: string, moduleName: string) => {
        return await this.dbInstance.get({ Id: id, Module: moduleName });
    };
}
```

So all of our database logic is encapsulated now. and also look at the `updateExample` function. Which is now just like any other function.

You just provide the primary key and sort key along with the fields that you want to get updated. And you are done!

**_And if you try to pass any unknown key that is not defined in your model you will get a typescript error on compile time!_**

## Final Step: Use it inside your code

Now we will use this repository to interact with the database

```js
const repository = new ExampleRepository("dev");

const response = await repository.createExample(request);
```

So now we have a CRUD application where we can take advantage of the `dynamoose` to eliminate the database query pain.

That’s it for today. Have a great day! :D

* It is done when I have created a new local database named `inventoryDB` using Compass's Embedded MongoDB Shell (MongoSH).

  * **see db** = show dbs
  * **see collections**  show collections
  * **switch to a db** = use db so in this instance it's "use inventoryDB"
  * note that a db won't be officially created until a record is added

    https://www.mongodb.com/basics/create-database
    https://www.mongodb.com/docs/v4.4/core/databases-and-collections/

* It is done when I have added a new collection named `bookCollection`, inserted a field called `title`, and provided a value for the `title` field.

  * **create a db** = db.<dbname>.insert({ x: "xxx" })

    ```
    db.bookCollection.insert({ title: "Heart of a Buddha" })
    ```

<!-- https://www.mongodb.com/docs/v4.4/tutorial/insert-documents/ -->
<!-- https://www.mongodb.com/docs/v4.4/reference/insert-methods/ -->

* It is done when I refresh the page and the `inventoryDB` appears on the list of databases.
//section go to Mongo Compass; refresh the DB section to see it

* It is done when I open the `bookCollection` collection and the document I just created is visible on the Documents tab and an `_id` field has been automatically inserted.
//section done

* It is done when I have modified the existing document, added a new field called `author`, and provided a value for the `author` field.

**to update**
```
db.bookCollection.updateOne(
   { "title": "Heart of a Buddha" },
   {
     $set: { "author": "unknown #2", "pages": 523 },
     $currentDate: { lastModified: true }
   }
)
```
https://www.mongodb.com/docs/v4.4/tutorial/update-documents/

**update items**
  ```
  db.groceryCollection.updateOne({"item": "banana"}, {$set: { "item" : "apple"}});
  ```

**delete item**
  ```
  db.groceryCollection.deleteOne( {"item": "apple"});
  db.groceryCollection.deleteOne({ "_id" : ObjectId("YOUR-UNIQUE_ID")} );
  db.groceryCollection.deleteOne({ "_id" : ObjectId("6349dcf35506ddbaa9a6c03d")} );
  ```

Refer to the documentation:

  * [MongoDB docs on Sort](https://docs.mongodb.com/manual/reference/method/cursor.sort/)

  * [MongoDB docs on Skip](https://docs.mongodb.com/manual/reference/method/cursor.skip/)

  * [MongoDB docs on Limit](https://docs.mongodb.com/manual/reference/method/cursor.limit/)
  

Refer to the documentation:

* [Mongoose docs on models](https://mongoosejs.com/docs/models.html)

* [Mongoose docs on schemas](https://mongoosejs.com/docs/guide.html)

* [Mongoose docs on validation](https://mongoosejs.com/docs/validation.html)

# MONGOOSE
## Creates a new department
```
app.post('/new-department/:department', (req, res) => {
  const newDepartment = new Department({ name: req.params.department });

  newDepartment.save();
  
  if (newDepartment) {
    res.status(201).json(newDepartment);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});
```

## Finds all departments
```
app.get('/all-departments', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  Department.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
});
```

## Finds the first matching document
```
app.get('/find-wine-department', (req, res) => {
  // Using model in route to find all documents that are instances of that model

  Department.findOne({ name: 'Wine' }, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
});
```

## Finds first document matching parameter and deletes
## For demo, use 'Wine' as URL param
```
app.delete('/find-one-delete/:departmentName', (req, res) => {

  Department.findOneAndDelete(
    { name: req.params.departmentName },
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
      }
    }
  );
});
```
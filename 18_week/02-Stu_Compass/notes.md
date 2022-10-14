* It is done when I have created a new local database named `inventoryDB` using Compass's Embedded MongoDB Shell (MongoSH).
//section to see db = show dbs
//section to switch to a db = use db so in this instance it's "use inventoryDB"
//section note that a db won't be officially created until a record is added

<!-- https://www.mongodb.com/basics/create-database -->
<!-- https://www.mongodb.com/docs/v4.4/core/databases-and-collections/ -->

* It is done when I have added a new collection named `bookCollection`, inserted a field called `title`, and provided a value for the `title` field.
//section to create a db = db.<dbname>.insert({ x: "xxx" })
//section db.bookCollection.insert({ title: "Heart of a Buddha" })

<!-- https://www.mongodb.com/docs/v4.4/tutorial/insert-documents/ -->
<!-- https://www.mongodb.com/docs/v4.4/reference/insert-methods/ -->

* It is done when I refresh the page and the `inventoryDB` appears on the list of databases.
//section go to Mongo Compass; refresh the DB section to see it

* It is done when I open the `bookCollection` collection and the document I just created is visible on the Documents tab and an `_id` field has been automatically inserted.
//section done

* It is done when I have modified the existing document, added a new field called `author`, and provided a value for the `author` field.
//section to update....
<!-- db.bookCollection.updateOne(
   { "title": "Heart of a Buddha" },
   {
     $set: { "author": "unknown #2", "pages": 523 },
     $currentDate: { lastModified: true }
   }
) -->
<!-- https://www.mongodb.com/docs/v4.4/tutorial/update-documents/ -->
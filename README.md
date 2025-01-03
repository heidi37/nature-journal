# Nature Journal
This is an application for tracking your observations in the wild.

[Live Project](https://nature-journal.onrender.com/)

NOTE: hosted on free tier of render.com, may take a minute to spin up.

Here is a Work In Progress Screenshot. I will be improving the design.

<img src ="./public/images/screenshot.png" alt="screenshot of nature Journal">

## How It's Made:
This is a node.js/Express API, using EJS templates and a MongoDB database. I built this for [#100devs](https://100devs.org/about).

I originally had all my application logic in server.js but I separated the logic based on MVC architecture.

### Tech Used:
- Javascript
- node.js
- Express
- EJS
- MongoDB
- [render.com](https://render.com/) free hosting

## Optimizations
It is in very early stage development. It needs a lot! 😁
- manage CRUD with mongoDB Ids
- Authentication

## Lessons Learned
I learned about implementing the CRUD operations in a full stack web application.

I also learned about environment variables.

I learned about connecting to MongoDB.

I had issues because my database collection had a different name than what I was calling it in my app.

I learned how to use different names for your collections inside the application.

Along the way I somehow generated a "test" database with an "entries" collection. The string I copied from MongoDB Atlas did not have the database name in it. Apparently without a database name in the connection string Mongoose will default to "test".

Specifying the cluster in the connection string is not required but the string MongoDB Atlas gives you will have it in it at the end.

Also specifying the exact collection name in the model as a third parameter was required. If you don't specify one, the lowercase plural tense of the first parameter is supposed to be used.

```
module.exports = mongoose.model('Entry', EntrySchema, 'entries');
```

The line above exports the 'EntrySchema' defined in the model as 'Entry' from the 'entries' collection.

The userId on an entry should be the data type "ObjectId".

## Related Projects
Here is another very simple web application that accesses a static API that I built for learning purposes:
https://heidifryzell.com/what-bird/

NOTE: The *What Bird* web application is hosted on free web hosting and may take up to a minute to spin up when you fill the form and make a request.
const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const mongo_url = "mongodb://localhost:27017";
const dataBase = "first-api";

MongoClient.connect(
  mongo_url,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(err, null, "data base connexion failed");
    const db = client.db(dataBase);

    app.post("/new_contact", (req, res) => {
      let newcontact = req.body;
      db.collection("contacts").insertOne(newcontact, (err, data) => {
        if (err) res.send("cant add contact");
        else res.send("contact added");
      });
    });
    
    app.get("/get_contact", (req, res) => {
      db.collection("contacts")
        .find()
        .toArray((err, data) => {
          if (err) res.send("cant find contact");
          else res.send(data);
        });
    });
    app.get("/get_contactID/:id", (req, res) => {
      let searchcontactId = ObjectID(req.params.id);
      db.collection("contacts").findOne(
        { _id: searchcontactId },
        (err, data) => {
          if (err) res.send("cant find contact");
          else res.send(data);
        }
      );
    });
    app.put("/put_contactID/:id", (req, res) => {
      let id = ObjectID(req.params.id);
      let modifiedcontact = req.body;
      db.collection("contacts").findOneAndReplace(
        { _id: id },
        { ...modifiedcontact },
        (err, data) => {
          if (err) res.send("cant modified  contact");
          else res.send(data);
        }
      );
    });
    app.delete("/delete_contactID/:id", (req, res) => {
      let id = ObjectID(req.params.id);
      let modifiedcontact = req.body;
      db.collection("contacts").findOneAndDelete(
        { _id: id },
        { ...modifiedcontact },
        (err, data) => {
          if (err) res.send("cant modified  contact");
          else res.send(data);
        }
      );
    });
  }
);

app.listen(3007, err => {
  if (err) console.log("server err");
  else console.log("server is running on port 3007");
});

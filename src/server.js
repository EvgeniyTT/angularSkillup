'use strict';

const mongodb = require('mongodb');
const express = require('express');
const assert = require('assert');
const bodyParser = require('body-parser');

function errorHandler(err, req, res, next) {
  res.status(500);
  res.send(err);
}

const app = express();
app.use(bodyParser.json());
app.use(errorHandler);

const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost:27017/imageGallery', function(err, db) {
  assert.equal(err, null);
  let maxId;
  db.collection('images').find().sort({_id:-1}).limit(1).toArray(function(err, imageWithMaxId) {
    maxId = imageWithMaxId.id;
  });


  app.get('/allImages', function (req, res) {
    db.collection('images').find().toArray(function(err, images) {
      assert.equal(err, null);
      res.send(images);
    })
  });

  app.get('/details/:id', function (req, res, next) {
    const id = parseInt(req.params.id);
    if(isNan(id)) {
      next(Error('can`t parse image id to number'));
    }
    db.collection('images').find({ id: id }).toArray(function(err, image) {
      assert.equal(err, null);
      res.send(image);
    })
  });

  app.post('/', function (req, res, next) {
    const image = req.body.image;
    if (image.src == 'undefined' || image.description == 'undefined') {
      next(Error('Required fields are not populated'));
    } else {
      image.id = maxId + 1;
      db.collection('images').insert(image).toArray(function(err, result) {
        assert.equal(err, null);
        res.send('Image was successfully inserted');
        maxId++;
      })
    };
  });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
})

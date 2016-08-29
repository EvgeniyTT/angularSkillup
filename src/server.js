'use strict';

const mongodb = require('mongodb');
const express = require('express');
const assert = require('assert');
const bodyParser = require('body-parser');
const cors = require('cors');

function errorHandler(err, req, res, next) {
  res.status(500);
  res.send('error', { error: err });
}

const host = '10.10.54.24';
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler);

const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost:27017/imageGallery', function (err, db) {
  assert.equal(err, null);
  let maxId;
  db.collection('images').find().sort({ id: -1 }).limit(1)
    .toArray( function(err, imageWithMaxId) {
      maxId = imageWithMaxId[0].id;
    });

  app.get('/allImages', function (req, res) {
    db.collection('images').find().toArray(function(err, images) {
      assert.equal(err, null);
      res.send(images);
    });
  });

  app.get('/:imageId', function (req, res, next) {
    const imageId = parseInt(req.params.imageId, 10);
    if (isNaN(imageId)) {
      next(Error('can`t parse image id to number'));
    } else {
      db.collection('images').findOne({ id: imageId }, function(err, image) {
        assert.equal(null, err);
        res.send(image);
      });
    }
  });

  app.post('/', function (req, res, next) {
    const image = req.body;
    if (image.src == 'undefined' || image.description == 'undefined') {
      next(Error('Required fields are not populated'));
    } else {
      image.id = maxId++;
      db.collection('images').insert(image, function(err, result) {
        assert.equal(err, null);
        res.send('Image was successfully inserted');
      });
    }
  });

  app.put('/', function(req, res, next) {
    const image = req.body;
    if (image.src == 'undefined' || image.description == 'undefined') {
      next(Error('Required fields are not populated'));
    } else {
      db.collection('images').update({ id: image.id }, image, function(err, result) {
        assert.equal(err, null);
        res.send('Image was successfully inserted');
        maxId++;
      });
    }
  });

  app.delete('/:imageId', function (req, res, next) {
    const imageId = parseInt(req.params.imageId, 10);
    if (isNaN(imageId)) {
      next(Error('can`t parse image id to number'));
    } else {
      db.collection('images').remove({ id: imageId }, function(err) {
        assert.equal(err, null);
        res.send('image was deleted successfully');
      });
    }
  });
});

app.listen(3001, host,  function () {
  console.log('app listening on port 3001!');
});

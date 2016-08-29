'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const assert = require('assert');
const bodyParser = require('body-parser');
const cors = require('cors');

function errorHandler(err, req, res, next) {
  res.status(404);
  res.send('error', { error: err });
}

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler);

// MONGOOSE
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/imageGallery`);
const db = mongoose.connection;
db.on('error', function (err) { console.log(err); } );
db.once('open', function() {
  const Schema = mongoose.Schema;
  const imageSchema = new Schema({
    src: String,
    description: String,
    dateAdded: Date
  });
  let Image = mongoose.model('Image', imageSchema, 'images');

  app.get('/images', function (req, res) {
    Image.find(function (err, images) {
      assert.equal(err, null);
      res.send(images);
    });
  });

  app.get('/images/:imageId', function (req, res, next) {
    const imageId = req.params.imageId;
    Image.findOne({ _id: ObjectId(imageId) }, function (err, image) {
      assert.equal(err, null);
      res.send(image);
    });
  });

  app.post('/images', function (req, res, next) {
    const image = new Image(req.body);
    if (image.src == 'undefined' || image.description == 'undefined') {
      return next(new Error('Required fields are not populated'));
    } else {
      image.save(function (err) {
        // if (err) return handleError(err);
        res.send('Image was successfully inserted');
      });
    }
  });

  app.put('/images:imageId', function(req, res, next) {
    const imageId = req.params.imageId;
    const image = req.body;
    if (image.src == 'undefined' || image.description == 'undefined') {
      return next(new Error('Required fields are not populated'));
    } else {
      Images.findOneAndUpdate({ _id: ObjectId(imageId) }, image, function(err) {
        assert.equal(err, null);
        res.send('Image was successfully updated');
      });
    }
  });

  app.delete('/images/:imageId', function (req, res, next) {
    const imageId = req.params.imageId;
    Image.remove({ _id: ObjectId(imageId) }, function (err, image) {
      assert.equal(err, null);
      if (err) { return next(err); }
      res.send(image);
    });
  });
});

//  PURE MONGO
// MongoClient.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/imageGallery`, function (err, db) {
//   assert.equal(err, null);
//
//   app.get('/images', function (req, res) {
//     db.collection('images').find().toArray(function(err, images) {
//       assert.equal(err, null);
//       res.send(images);
//     });
//   });
//
//   app.get('/images/:imageId', function (req, res, next) {
//     const imageId = req.params.imageId;
//     db.collection('images').findOne({ _id: ObjectId(imageId) }, function(err, image) {
//       assert.equal(null, err);
//       res.send(image);
//     });
//   });
//
//   app.post('/images', function (req, res, next) {
//     const image = req.body;
//     if (image.src == 'undefined' || image.description == 'undefined') {
//       next(Error('Required fields are not populated'));
//     } else {
//       db.collection('images').insert(image, function(err) {
//         assert.equal(err, null);
//         res.send('Image was successfully inserted');
//       });
//     }
//   });
//
//   app.put('/images:imageId', function(req, res, next) {
//     const imageId = req.params.imageId;
//     const image = req.body;
//     if (image.src == 'undefined' || image.description == 'undefined') {
//       next(Error('Required fields are not populated'));
//     } else {
//       db.collection('images').update({ _id: ObjectId(imageId) }, image, function(err) {
//         assert.equal(err, null);
//         res.send('Image was successfully updated');
//       });
//     }
//   });
//
//   app.delete('/images/:imageId', function (req, res, next) {
//     const imageId = req.params.imageId;
//     db.collection('images').remove({ _id: ObjectId(imageId) }, function(err) {
//       assert.equal(err, null);
//       res.send('image was deleted successfully');
//     });
//   });
// });

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST,  function () {
  console.log('app listening on port 3001!');
});

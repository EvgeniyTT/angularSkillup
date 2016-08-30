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

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MONGOOSE
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/imageGallery`);
const db = mongoose.connection;
db.on('error', (err) => { console.log(err); });
db.once('open', () => {
  const Schema = mongoose.Schema;
  const imageSchema = new Schema({
    src: String,
    description: String,
    dateAdded: Date
  });
  const Image = mongoose.model('Image', imageSchema, 'images');

  // routing
  app.get('/images', (req, res, next) => {
    Image.find((err, images) => {
      if (err) { return next(err); }
      res.send(images);
    });
  });

  app.get('/images/:imageId', (req, res, next) => {
    const imageId = req.params.imageId;
    Image.findOne({ _id: new ObjectId(imageId) }, (err, image) => {
      if (err) { return next(err); }
      res.send(image);
    });
  });

  app.post('/images', (req, res, next) => {
    const image = new Image(req.body);
    if (image.src === '' || image.description === '') {
      const err = new Error('Required fields are not populated');
      err.status = 400;
      return next(err);
    }
    image.save((err) => {
      if (err) { return next(err); }
      res.send('Image was successfully inserted');
    });
  });

  app.put('/images/:imageId', (req, res, next) => {
    const imageId = req.params.imageId;
    const image = req.body;
    if (image.src === '' || image.description === '') {
      const err = new Error('Required fields are not populated');
      err.status = 400;
      return next(err);
    }
    Image.findOneAndUpdate({ _id: new ObjectId(imageId) }, image, (err) => {
      if (err) { return next(err); }
      res.send('Image was successfully updated');
    });
  });

  app.delete('/images/:imageId', (req, res, next) => {
    const imageId = req.params.imageId;
    Image.remove({ _id: new ObjectId(imageId) }, (err, image) => {
      assert.equal(err, null);
      if (err) { return next(err); }
      res.send(image);
    });
  });

  // error handling
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.toString());
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

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log('app listening on port 3001!');
});

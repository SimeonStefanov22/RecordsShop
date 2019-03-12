const Record = require('../models/Record');

module.exports = {
  getRecords: (req, res) => {
    Record.find()
      .then((records) => {
        res
          .status(200)
          .json({ message: 'Fetched records successfully.', records });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },
  createRecord: (req, res) => {
    const recordObj = req.body;
    Record.create(recordObj)
    .then((record) => {
      res.status(200)
        .json({
          message: 'Record created successfully!',
          record
        })
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
  },
  getRecordsByCategory: (req, res) => {
    const category = req.params.category;
    Record.find({categories: {
      $all: [category]
    }})
      .then((records) => {
        res
          .status(200)
          .json({ message: `${category} records fetched.`, records })
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  }
}
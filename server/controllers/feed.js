const Record = require('../models/Record');

module.exports = {
    getRecords: (req, res, next) => {
        Record.find()
            .then((games) => {
                res
                    .status(200)
                    .json({ message: 'Fetched records successfully.', games });

            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    },
    createRecord: (req, res, next) => {
        const recordObj = req.body;
        console.log(req.body);
        Record.create(recordObj)
            .then((game) => {
                res.status(200)
                    .json({
                        message: 'Record created successfully!',
                        game
                    })
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }

                next(error);
            });
    },
    getRecordsByCategory: (req, res, next) => {
        const category = req.params.category;
        Record.find({categories: {
                $all: [category]
            }})
            .then((games) => {
                res
                    .status(200)
                    .json({ message: `${category} records fetched.`, games })
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    }
}
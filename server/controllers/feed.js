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

    deleteRecord: (req, res, next) => {
        const id = req.params.id;
        //console.log('controller'+ id);
        Record.findById(id)
            .then((record) => {
                record
                    .remove()
                    .then(() => {
                        return res.status(200).json({
                            success: true,
                            message: 'Record deleted successfully!'
                        })
                    })
            })
            .catch(() => {
                return res.status(200).json({
                    success: false,
                    message: 'Entry does not exist!'
                })
            })

    },

    updateRecord: (req, res, next) => {
        const id = req.params.id;
        const data = req.body;
        Record.findById(req.params.id)
            .then((record) => {

                Record.updateOne({_id: id}, { $set: data})
                    .then((game) => {
                        res.status(200)
                            .json({
                                message: 'Record updated successfully!',
                                game
                            })
                    })
                    .catch((error) => {
                        if (!error.statusCode) {
                            error.statusCode = 500;
                        }

                        next(error);
                    });

            })
            .catch(() => {
                return res.status(200).json({
                    success: false,
                    message: 'Entry does not exist!'
                })
            })

    }


}
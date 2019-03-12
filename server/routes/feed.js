const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/records', feedController.getRecords);
router.post('/record/create', feedController.createGame);

module.exports = router;
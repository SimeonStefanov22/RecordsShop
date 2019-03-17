const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/games', feedController.getRecords);
router.post('/game/create', feedController.createRecord);
router.delete('/games', feedController.deleteRecord);

module.exports = router;
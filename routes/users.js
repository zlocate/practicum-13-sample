const router = require('express').Router();
const {
  create, getAll, get, updateCurrent, updateCurrentAvatar,
} = require('../controllers/users');

router.post('/', create);
router.get('/', getAll);
router.get('/:userId', get);
router.patch('/me', updateCurrent);
router.patch('/me/avatar', updateCurrentAvatar);

module.exports = router;

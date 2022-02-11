const router = require('express').Router();
const {
  getAll, create, del, like, unlike,
} = require('../controllers/cards');

router.get('/', getAll);
router.post('/', create);
router.delete('/:cardId', del);
router.put('/:cardId/likes', like);
router.delete('/:cardId/likes', unlike);

module.exports = router;

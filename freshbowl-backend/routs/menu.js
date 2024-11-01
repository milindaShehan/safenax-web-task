
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.post('/add', menuController.addMenu);
router.get('/', menuController.getMenus);
router.get('/:id', menuController.getMenuById);
router.put('/update/:id', menuController.updateMenu);
router.delete('/delete/:id', menuController.deleteMenu);

module.exports = router;

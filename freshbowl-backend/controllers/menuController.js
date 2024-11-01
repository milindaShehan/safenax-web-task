// controllers/userController.js
const Menu = require('../models/menu');

exports.addMenu = (req, res) => {
    const { name, description, price, imageUrl, category } = req.body;
    
    const newMenu = new Menu({
        name,
        description,
        price,
        imageUrl,
        category
    });
    
    newMenu
        .save()
        .then(() => {
        res.json('Menu added');
        })
        .catch((err) => {
        console.log(err);
        res.status(500).json('Error adding menu');
        });
    }

exports.getMenus = (req, res) => {
    Menu.find()
        .then((menus) => {
        res.json(menus);
        })
        .catch((err) => {
        console.log(err);
        res.status(500).json('Error fetching menus');
        });
    }

exports.updateMenu = async (req, res) => {
    const menuId = req.params.id;
    const { name, description, price, imageUrl, category } = req.body;
    const updateMenu = {
        name,
        description,
        price,
        imageUrl,
        category
    };
    
    try {
        await Menu.findByIdAndUpdate(menuId, updateMenu);
        res.status(200).send({ status: 'Menu updated' });
    } catch (err) {
        res.status(500).send({ status: 'Error with updating data', error: err.message });
    }
    }

exports.deleteMenu = async (req, res) => {
    const menuId = req.params.id;
    
    try {
        await Menu.findByIdAndDelete(menuId);
        res.status(200).send({ status: 'Menu deleted' });
    } catch (err) {
        res.status(500).send({ status: 'Error with deleting data', error: err.message });
    }
    }

exports.getMenuById = (req, res) => {
    const menuId = req.params.id;
    
    Menu.findById(menuId)
        .then((menu) => {
        res.json(menu);
        })
        .catch((err) => {
        console.log(err);
        res.status(500).json('Error fetching menu');
        });
    }


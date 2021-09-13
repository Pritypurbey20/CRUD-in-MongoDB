const express = require('express')
const router = express.Router()
const controller = require('../Controller/controller')

// or const router = require('express').Router()

router.get('/',controller.product_all);
router.post('/',controller.product_create);
router.get('/:productId',controller.product_details);
router.put('/:productId',controller.product_update);
router.delete('/:productId',controller.product_delete);

module.exports = router;




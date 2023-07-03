const express = require("express");
const { cartController } = require("../controllers");
const { loginRequired } = require("../utils/auth");

const router = express.Router();

router.post('', loginRequired, cartController.createCartItem);
router.get("/list", loginRequired, cartController.getCartList);
router.patch('', loginRequired, cartController.updateCartItem);
router.delete('/all', loginRequired, cartController.deleteCart)

module.exports = router;

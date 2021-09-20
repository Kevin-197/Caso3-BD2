"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subastas_controller_1 = require("../controllers/subastas.controller");
const router = (0, express_1.Router)();
router.post('/signup', subastas_controller_1.addArticulo);
exports.default = router;

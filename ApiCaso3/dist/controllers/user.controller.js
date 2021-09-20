"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const user_1 = __importDefault(require("../models/user"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!req.query.email || !req.query.password) {
        return res.status(400).json({ msg: "Please. Send your email and password" });
    }
    const user = yield user_1.default.findOne({ email: (_a = req.query.email) === null || _a === void 0 ? void 0 : _a.toString() });
    if (user) {
        return res.status(400).json({ msg: "The User already Exists" });
    }
    const newUser = new user_1.default(req.query);
    yield newUser.save();
    return res.status(201).json(newUser);
});
exports.signUp = signUp;

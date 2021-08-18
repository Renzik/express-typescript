"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = require("body-parser");
var cookie_session_1 = __importDefault(require("cookie-session"));
var express_1 = __importDefault(require("express"));
var AppRoute_1 = require("./AppRoute");
// controllers
require("./controllers/LoginController");
require("./controllers/RootController");
var PORT = 3000;
var app = express_1.default();
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['secret'] }));
// routes
app.use(AppRoute_1.AppRouter.getInstance());
app.listen(PORT, function () {
    console.log("App running on port " + PORT);
});

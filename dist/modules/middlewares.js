"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleInputErros = void 0;
var express_validator_1 = require("express-validator");
var handleInputErros = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.handleInputErros = handleInputErros;
//# sourceMappingURL=middlewares.js.map
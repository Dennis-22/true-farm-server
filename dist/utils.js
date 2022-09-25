"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseData = void 0;
function responseData(res, data) {
    res.status(200).json({ success: true, data });
}
exports.responseData = responseData;

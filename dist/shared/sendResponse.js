"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLoginResponse = void 0;
const sendResponse = (res, data) => {
    const responseData = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        meta: data.meta || null || undefined,
        data: data.data || null,
    };
    res.status(data.statusCode).json(responseData);
};
const sendLoginResponse = (res, data) => {
    const responseData = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        token: data.token || null,
    };
    res.status(data.statusCode).json(responseData);
};
exports.sendLoginResponse = sendLoginResponse;
exports.default = sendResponse;

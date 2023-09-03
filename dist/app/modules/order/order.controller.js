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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if ('user' in req) {
        const result = yield order_service_1.OrderService.createOrder(req.body, req.user);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Order created successfully',
            data: result,
        });
    }
    else {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Please login first');
    }
}));
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if ('user' in req) {
        const user = req.user;
        if (user.role === 'customer') {
            const result = yield order_service_1.OrderService.getAllOrder(user.role, user.userId);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: 'Orders retrieved successfully',
                data: result,
            });
        }
        else {
            const result = yield order_service_1.OrderService.getAllOrder(user.role, user.userId);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: 'Orders retrieved successfully',
                data: result,
            });
        }
    }
    else {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Please login first');
    }
});
const getSingleOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if ('user' in req) {
        const user = req.user;
        const orderId = req.params.orderId;
        if (user.role === 'customer') {
            const result = yield order_service_1.OrderService.getSingleOrder(user.role, user.userId, orderId);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: 'Orders retrieved successfully',
                data: result,
            });
        }
        else {
            const result = yield order_service_1.OrderService.getSingleOrder(user.role, user.userId, orderId);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: 'Orders retrieved successfully',
                data: result,
            });
        }
    }
    else {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Please login first');
    }
}));
exports.OrderController = {
    createOrder,
    getAllOrder,
    getSingleOrder,
};

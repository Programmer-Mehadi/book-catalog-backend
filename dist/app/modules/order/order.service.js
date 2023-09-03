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
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const createOrder = (data, userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (userData) {
        const result = yield prisma_1.default.order.create({
            data: Object.assign(Object.assign({}, data), { userId: userData.userId }),
        });
        return result;
    }
    else {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Please login first');
    }
});
const getAllOrder = (role, id) => __awaiter(void 0, void 0, void 0, function* () {
    if (role === 'customer') {
        const result = yield prisma_1.default.order.findMany({
            where: {
                userId: id,
            },
        });
        return result;
    }
    else {
        const result = yield prisma_1.default.order.findMany();
        return result;
    }
});
const getSingleOrder = (role, userId, orderId) => __awaiter(void 0, void 0, void 0, function* () {
    if (role === 'customer') {
        let result = yield prisma_1.default.order.findUnique({
            where: {
                id: orderId,
            },
        });
        if (!result) {
            return null;
        }
        result = yield prisma_1.default.order.findUnique({
            where: {
                id: orderId,
                userId: userId,
            },
        });
        if (result) {
            return result;
        }
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'You are not authorized to view this order');
    }
    else {
        const result = yield prisma_1.default.order.findUnique({
            where: {
                id: orderId,
            },
        });
        return result;
    }
});
exports.OrderService = {
    createOrder,
    getAllOrder,
    getSingleOrder,
};

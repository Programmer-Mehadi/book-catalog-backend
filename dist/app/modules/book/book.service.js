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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const book_constants_1 = require("./book.constants");
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data: data,
    });
    return result;
});
const getAllBook = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const { search } = filters, filterData = __rest(filters, ["search"]);
    const andConditions = [];
    if (search) {
        andConditions.push({
            OR: book_constants_1.bookSearchableFields.map(field => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive',
                },
            })),
        });
    }
    //
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => {
                if (book_constants_1.bookRelationalFields.includes(key)) {
                    if (key === 'minPrice') {
                        return {
                            [book_constants_1.bookRelationalFieldsMapper[key]]: {
                                gte: Number(filterData[key]),
                            },
                        };
                    }
                    if (key === 'maxPrice') {
                        return {
                            [book_constants_1.bookRelationalFieldsMapper[key]]: {
                                lte: Number(filterData[key]),
                            },
                        };
                    }
                    else {
                        return {
                            [book_constants_1.bookRelationalFieldsMapper[key]]: filterData[key],
                        };
                    }
                }
                else {
                    return {
                        [key]: {
                            equals: filterData[key],
                        },
                    };
                }
            }),
        });
    }
    //
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    let result;
    try {
        result = yield prisma_1.default.book.findMany({
            where: whereConditions,
            skip,
            take: limit,
            orderBy: options.sortBy && options.sortOrder
                ? { [options.sortBy]: options.sortOrder }
                : {
                    createdAt: 'desc',
                },
        });
    }
    catch (err) {
        console.log(err);
    }
    const total = yield prisma_1.default.book.count({});
    return {
        meta: {
            page,
            size: limit,
            total,
            totalPage: Math.ceil(total / limit),
        },
        data: result,
    };
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            id: id,
        },
    });
    return result;
});
const getBookByCategory = (id, filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    let result;
    try {
        result = yield prisma_1.default.book.findMany({
            where: {
                categoryId: id,
            },
            skip,
            take: limit,
        });
    }
    catch (err) {
        console.log(err);
    }
    const total = yield prisma_1.default.book.count({
        where: {
            categoryId: id,
        },
    });
    return {
        meta: {
            page,
            size: limit,
            total,
            totalPage: Math.ceil(total / limit),
        },
        data: result,
    };
});
const updateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingBook = yield prisma_1.default.book.findUnique({
            where: { id: id },
        });
        if (!existingBook) {
            return;
        }
        const result = yield prisma_1.default.book.update({
            where: { id: id },
            data: data,
        });
        return result;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingBook = yield prisma_1.default.book.findUnique({
            where: { id: id },
        });
        if (!existingBook) {
            return existingBook;
        }
        else {
            const result = yield prisma_1.default.book.delete({
                where: { id: id },
            });
            return result;
        }
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.BookService = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook,
    getBookByCategory,
};

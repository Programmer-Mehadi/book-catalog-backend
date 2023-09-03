"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRelationalFieldsMapper = exports.bookRelationalFields = exports.bookSearchableFields = exports.bookFilterableFields = void 0;
exports.bookFilterableFields = [
    'search',
    'minPrice',
    'maxPrice',
    'category',
];
exports.bookSearchableFields = ['title', 'author', 'genre'];
exports.bookRelationalFields = [
    'minPrice',
    'maxPrice',
    'category',
];
exports.bookRelationalFieldsMapper = {
    minPrice: 'price',
    maxPrice: 'price',
    category: 'categoryId',
};

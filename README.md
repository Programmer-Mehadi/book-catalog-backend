# Book Catlog Backend

Live Link: https://book-catalog-backend-gilt.vercel.app/

Application Routes:

<h6>User:</h6>

1. https://book-catalog-backend-gilt.vercel.app/api/v1/auth/signup (POST)
2. https://book-catalog-backend-gilt.vercel.app/api/v1/users (GET)
3. https://book-catalog-backend-gilt.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
4. https://book-catalog-backend-gilt.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
5. https://book-catalog-backend-gilt.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database
6. https://book-catalog-backend-gilt.vercel.app/api/v1/profile (GET)

<h6>Category:</h6>

7. https://book-catalog-backend-gilt.vercel.app/api/v1/categories/create-category (POST)
8. https://book-catalog-backend-gilt.vercel.app/api/v1/categories (GET)
9. https://book-catalog-backend-gilt.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
10. https://book-catalog-backend-gilt.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
11. https://book-catalog-backend-gilt.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

<h6>Books</h6>

12. https://book-catalog-backend-gilt.vercel.app/api/v1/books/create-book (POST)
13. https://book-catalog-backend-gilt.vercel.app/api/v1/books (GET)
14. https://book-catalog-backend-gilt.vercel.app/api/v1/books/:categoryId/category (GET)
15. https://book-catalog-backend-gilt.vercel.app/api/v1/books/:id (GET)
16. https://book-catalog-backend-gilt.vercel.app/api/v1/books/:id (PATCH)
17. https://book-catalog-backend-gilt.vercel.app/api/v1/books/:id (DELETE)

<h6>Orders</h6>

18. https://book-catalog-backend-gilt.vercel.app/api/v1/orders/create-order (POST)
19. https://book-catalog-backend-gilt.vercel.app/api/v1/orders (GET)
20. https://book-catalog-backend-gilt.vercel.app/api/v1/orders/:orderId (GET)

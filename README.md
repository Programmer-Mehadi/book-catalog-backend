# Book Catlog Backend

Live Link: https://book-catalog-backend-gilt.vercel.app/

Application Routes:

<h6>User:</h6>

1. https://book-catalog-backend-gilt.vercel.app/api/v1/auth/signup (POST)
2. https://book-catalog-backend-gilt.vercel.app/api/v1/users (GET)
3. https://book-catalog-backend-gilt.vercel.app/api/v1/users/7a912f85-7947-4e69-94c5-5c3b6168fca4 (Single GET) Include an id that is saved in your database
4. https://book-catalog-backend-gilt.vercel.app/api/v1/users/7a912f85-7947-4e69-94c5-5c3b6168fca4 (PATCH)
5. https://book-catalog-backend-gilt.vercel.app/api/v1/users/7a912f85-7947-4e69-94c5-5c3b6168fca4 (DELETE) Include an id that is saved in your database
6. https://book-catalog-backend-gilt.vercel.app/api/v1/profile (GET)

<h6>Category:</h6>

7. https://book-catalog-backend-gilt.vercel.app/api/v1/categories/create-category (POST)
8. https://book-catalog-backend-gilt.vercel.app/api/v1/categories (GET)
9. https://book-catalog-backend-gilt.vercel.app/api/v1/categories/50cf5e59-442c-44ea-9b80-9e7b636bcc46 (Single GET) Include an id that is saved in your database
10. https://book-catalog-backend-gilt.vercel.app/api/v1/categories/50cf5e59-442c-44ea-9b80-9e7b636bcc46 (PATCH)
11. https://book-catalog-backend-gilt.vercel.app/api/v1/categories/50cf5e59-442c-44ea-9b80-9e7b636bcc46 (DELETE) Include an id that is saved in your database

<h6>Books</h6>

12. https://book-catalog-backend-gilt.vercel.app/api/v1/books/create-book (POST)
13. https://book-catalog-backend-gilt.vercel.app/api/v1/books (GET)
14. https://book-catalog-backend-gilt.vercel.app/api/v1/books/50cf5e59-442c-44ea-9b80-9e7b636bcc46/category (GET)
15. https://book-catalog-backend-gilt.vercel.app/api/v1/books/a1e49c65-57f7-460b-8a7b-e6632f74a2aa (GET)
16. https://book-catalog-backend-gilt.vercel.app/api/v1/books/a1e49c65-57f7-460b-8a7b-e6632f74a2aa (PATCH)
17. https://book-catalog-backend-gilt.vercel.app/api/v1/books/a1e49c65-57f7-460b-8a7b-e6632f74a2aa (DELETE)

<h6>Orders</h6>

18. https://book-catalog-backend-gilt.vercel.app/api/v1/orders/create-order (POST)
19. https://book-catalog-backend-gilt.vercel.app/api/v1/orders (GET)
20. https://book-catalog-backend-gilt.vercel.app/api/v1/orders/d6b773db-7f45-4ba3-892b-a3facba7e25d (GET)

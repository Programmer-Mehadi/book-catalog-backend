# Digital Cow Hut Backend Assignment

- Assignment Name: Online Cow Selling Backend for Eid Ul Adha
  </br></br>
  <b>Live Link: https://digital-cow-hut-with-auth-cyan.vercel.app</b> </br></br>
- <b>Application Routes:</b>
- <b>Main Part:</b>
  </br><p>Auth(User):</p>
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/auth/login (POST)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/auth/signup (POST)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/auth/refresh-token (POST)
  </br><p>Auth(Admin):</p>
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/admins/create-admin (POST)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/admins/login (POST)
  </br><p>User:</p>
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/users (GET) Include an id that is saved in your database
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/users/648dc92a8ee18bf1843ab510 (Single GET) Include an id that is saved in your database
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/users/648dc92a8ee18bf1843ab510 (PATCH) Include an id that is saved in your database
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/users/648dc92a8ee18bf1843ab510 (DELETE) Include an id that is saved in your database
  </br><p>Cow:</p>
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/cows (POST)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/cows (GET)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/cows/648ebca3d2273dbb545ede27 (Single GET) Include an id that is saved in your database
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/cows/648ebca3d2273dbb545ede27 (PATCH) Include an id that is saved in your database
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/cows/648ebca3d2273dbb545ede27 (DELETE) Include an id that is saved in your database
  </br><p>Pagination and Filtering routes of Cows:</p>
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/cows?pag=1&limit=10 (page & limit)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc (sortBy & sortOrder)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/cows?minPrice=20000&maxPrice=70000 (minPrice & maxPrice)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/cows?location=Chattogram (location)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/cows?searchTerm=Cha (searchTern [ location, breed, category ])
  </br><p>Orders:</p>
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/orders (GET)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/orders (POST)
  </br><h1>Bonus Part:</h1>
  </br><p>Admin:</p>
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/users/create-admin (POST)
  </br><p>My Profile:</p>
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/users/my-profile (GET)
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/users/my-profile (PATCH)
  </br><p>Order:</p>
- https://digital-cow-hut-with-auth-cyan.vercel.app/api/v1/orders/2177a5b87d32123f08d2f5d4 (GET)

# l2b1a4-cow-hut-admin-auth-Programmer-Mehadi

This is a simple e-commerce React application that fetches products from the Fake Store API, displays them in a responsive layout, and provides full cart functionality—from adding/removing items to quantity adjustments and a 10% discount at final price.


 Features
 Product Listing Page (`/`)
  - Fetch and display product image, title, price, description  
  - "Add to Cart" button for each product; toggles to "Remove from Cart" if already in cart  
  - Responsive grid layout

  Cart Page (`/cart`)
  - List items in cart with name, price, quantity controls (±)  
  - Compute per-item total (`price × quantity`)  
  - Dynamic cart total, with a 10% discount applied
  - "Remove from Cart" option for each item

  State Management
  - Cart state managed via React Context (or custom hook) for global accessibility  
  - Adds/removes items, updates quantities, updates total price and discount

  Routing
  - `/` – Product listing page  
  - `/cart` – Cart details page  
  
  Project Structure
src/
  ├── components/
  │     ├── Navbar.jsx
  │     ├── ProductCard.jsx
  │     └── CartItem.jsx
  ├── pages/
  │     ├── Home.jsx
  │     └── Cart.jsx
  ├── context/
  │     └── CartContext.jsx
  ├── App.jsx
  
  └── main.jsx

# GadgetHeaven

**Website Live Link:** https://gadget-heaven-tamim.netlify.app

**Requirement Document Link:** https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf

## React Fundamental concepts used in this project

### 1. Components

- The project is built using reusable functional components like Navbar, Footer, Home, ProductDetails, Dashboard, etc., which allow separation of concerns and make the code more modular and maintainable.

### 3. Props (Properties)

- Props are used to pass data between components. For example, product data is passed to GadgetCard components via props in the Home component.
### 5. Context API

- The Context API is used to manage global state for the shopping cart and wishlist. This eliminates the need for prop drilling and allows any component to access the cart and wishlist data directly.

### 6. React Router

- React Router is used to create dynamic and multi-page navigation for the app. The Routes and Route components enable page routing, and useParams is used to fetch dynamic parameters (like product IDs) from the URL.

### 7. useEffect Hook

- The useEffect hook is utilized to perform side effects such as fetching data or performing actions based on state or prop changes. For example, it could be used to fetch product data on page load.

### 11. Routing and Navigation (useNavigate and useLocation)

- useNavigate is used for programmatic navigation (e.g., redirecting the user after a purchase).

- useLocation is used to determine the current URL and customize the navbar's appearance on different pages.

## Context API/LocalStorage

### 1. Context API

- The **Context API** is used to manage the global state for the shopping cart and wishlist across the application.
- The CartContext allows different components to access and update the cart and wishlist without needing to pass props through multiple levels.
- This helps maintain a central store for items added to the cart and wishlist, making it easy to update and retrieve data across different pages (e.g., the cart icon in the navbar or the Dashboard page).

### 2. LocalStorage (Optional)

- **LocalStorage** is optionally used to persist the cart and wishlist data even after the user reloads the page or closes and reopens the browser.
- By storing cart and wishlist data in LocalStorage, users can retain their selected items even if they navigate away from the page or refresh it.
- This is implemented by saving the cart and wishlist state to LocalStorage whenever they change and retrieving it when the application initializes.

## 5 key features of the **GadgetHeaven** project

### 1. Dynamic Product Categories with Filtering
- Users can browse gadgets by category (e.g., computers, phones, smartwatches) using a sidebar navigation.
- When a category is selected, the page dynamically updates to show products only from that category, allowing for easy browsing of relevant gadgets.
### 2. Shopping Cart and Wishlist Management
- Users can add items to the shopping cart or wishlist from the product details page.
- The number of items in the cart is dynamically shown on the navbar.
- A separate Dashboard page displays all items in the cart and wishlist, making it easy for users to manage their selections.
- The cart tab also shows the total price of items, with a feature to sort items by price in descending order.
### 3. Persistent Cart and Wishlist with Context API and LocalStorage
- The cart and wishlist data are managed using Context API, which provides a global state accessible across all components.
- Additionally, the cart and wishlist data are persisted using LocalStorage, so users’ selections are saved even when they reload the page or close the browser.
### 4. Product Details and Interactive UI
- Each product has its own details page, showing more in-depth information such as price, description, ratings, and specifications.
- Buttons for adding to the cart or wishlist are interactive and display toast notifications upon successful addition.
- The “Add to Wishlist” button is disabled after an item is added to prevent duplicate entries.
### 5. Smooth User Experience with Modals and Toasts
- Toast notifications appear when items are added to the cart or wishlist, providing real-time feedback to users.
- A purchase modal is shown after the user completes a purchase from the cart, and it dynamically clears the cart and redirects the user to the home page without reloading.
- The site ensures error-free navigation, including a custom 404 page for invalid routes and seamless routing using React Router.

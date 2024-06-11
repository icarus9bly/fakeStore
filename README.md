# Fake Store

Fake Store is a single-page e-commerce website built with React. This application showcases various products, allows users to add items to their cart, and view product details. It utilizes Context API for global state management and Tailwind CSS for styling.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Components](#components)
- [Context Providers](#context-providers)
- [Pages](#pages)
- [Styling](#styling)
- [API Integration](#api-integration)
- [License](#license)

## Installation

To get started with Fake Store, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/Nikhilpra17/fakeStore.git
cd fakeStore
npm install
```


## Components
Fake Store consists of the following main components:

- Header: Renders the navigation bar and site logo.
- Footer: Displays the footer information.
- Product: Displays individual product details.
- Sidebar: Shows the cart sidebar with functionalities to open and close.
- CartItem: Represents individual items in the cart.
- App: The main component that integrates all other components.
  
## Context Providers
Fake Store uses React's Context API to manage global state across the application. The following contexts are used:

### ProductContext
Manages the state related to products. It fetches product data from an API and provides it to the components.

- API Call: Fetches products data from an external API and stores it in the context.
- Usage: Provides product data to components like Product and ProductDetail.
### CartContext
Manages the cart's state and operations.

- Operations: Includes functionalities to add items, remove items, and clear the cart.
- Count Elements: Tracks the total number of items in the cart.
- Usage: Provides cart state and operations to components like CartItem and Sidebar.

### SidebarContext
Manages the state of the sidebar, including its open and close functionality.

- Usage: Provides state and functions to control the sidebar visibility.

## Pages
Fake Store has two main pages:

### Home Page
Path: /
- Description: Displays a list of products fetched from the API.
- Components: Utilizes Product component to render each product.

### Product Detail Page
Path: /product/
- Description: Shows detailed information about a specific product when clicked.
- Components: Uses ProductDetail component to display the details.

## Styling
Tailwind CSS is used for styling the application. Ensure that you have the Tailwind CSS dependencies installed and configured in your project.

## API Integration
The application fetches product data from a remote API. The fetched data is used to render product lists and details.

### Fetching Products
The ProductContext is responsible for making the API call and storing the fetched data.

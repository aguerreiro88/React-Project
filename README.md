# Module2
Board Games Store - React project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Versions
- Visual Studio Code - 1.48.1
- Bootstrap - 4.5.2
- JQuery - 3.5.1
- Popper - 1.16.1
- React - 16.13.1
- React-dom - 16.13.1
- React-icons- 3.11.0
- React-scripts - 3.4.3


## Available Scripts

In the project directory, you can run:

### `npm install`

This command installs all packages that the project depends on. 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Project Structure

### /public/index.html

Home page for the Board Games Store

#### /public/data

JSON files for the Data Model:

##### cart.json

| Element       | Type        |Description                                     | 
| ------------- |:-----------:|:----------------------------------------------:| 
| items         | List        |List of Cart Entries                            |
| total         | Long        |Sum of all Cart Entries Product Quantities      |

##### cartEntry.json

| Element             | Type        |Description                             | 
| ------------------- |:-----------:|:--------------------------------------:| 
| productName         | String      |Name of the product to add to cart      |
| productQuantity     | Long        |Quantity of products to add to cart     |


##### products.json

| Element             | Type        |Description                  | 
| ------------------- |:-----------:|:---------------------------:| 
| productName         | String      |Name of the product          |
| productDescription  | String      |Description for the product  |
| imageURL            | String      |URL for the product image    |
| stockQuantity       | Long        |Product quantity in stock    |

### /public/images

Contains all the images for the products.

### /src/index.js

Is the main component where the App.js component is inserted.

### /src/components
    
Contains all the components for the Board Games Store application:

#### App.js
    
Is the component that handles the main functions and where the other components (Cart.js and ListProducts.js) are inserted.
It contains the functions to:
- Fecth data from the Data Models
- Add or remove products to cart
- Update cart entry and cart when a product is added or removed;

#### Cart.js

Is the Cart component on the top of the page that contains:
- Cart icon
- Quantity of products added to cart

#### ListProducts.js

Is the component that displays the list of products, it contains:
- Image, Name and Description for the products
- Function to handle when the buttons, to add or remove products, are clicked
- Component to display the stock level of each product (DisplayStockLevelInfo.js)

#### DisplayStockLevelInfo.js

Is the component that validates and displays the stock level of each product.
- When the stock level is >= 16 the it displays the color green
- When the stock level is >= 6 and < 16 it displays the color yellow
- When the stock level is >= 1 and < 6 it displays the color orange
- Whent the stock level is 0 it displays the color red

### /src/css/

Contains all the css applied on the Board Games Store application

#### App.css

Contains the styles for all the element of the applications

#### index.css

Contains the styles for the body, header and footer of the pages


## Functionalities

### Add Product to cart

- When the "plus" button is clicked the selected product is added to the cart.
- The cart items value is incremented by 1 and the stock level for the selected product is reduced by 1. 
- When the stock level of a product is 0 it is not possible to add more to the cart.


### Remove Product from cart

- When the "minus" button is pressed the product is removed from the cart.
- The cart items values is decreased by 1 and the stock level for the selected product is increased by 1.
- This functionality only works if a product was added to the cart before, this means that if a product was not added to the cart it will not be possible to remove it from the cart.







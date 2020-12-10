import React, {Component} from 'react';
import {without} from 'lodash';
import '../css/App.css';

import ListProducts from './ListProducts';
import Cart from './Cart';

class App extends Component {

  constructor() {
    super();
    this.state = {
      listProducts: [],
      cartEntry:[],
      cart: [],
      lastIndex: 0,
      cartLastIndex: 0
    };

   this.addProductToCart = this.addProductToCart.bind(this);
   this.updateCartEntry = this.updateCartEntry.bind(this);
   this.updateCart = this.updateCart.bind(this);
   this.removeProductFromCart = this.removeProductFromCart.bind(this);
  }

  componentDidMount() {
    fetch('./data/products.json')
      .then(response => response.json())
      .then(result => {
        const products = result.map(item => {
          item.productId = this.state.lastIndex;
          this.setState({
            lastIndex: this.state.lastIndex + 1
          });
          return item;
        }) 
        this.setState({
          listProducts: products
        }); 
    });

    fetch('./data/cartEntry.json')
      .then(response => response.json())
      .then(result => {
        this.setState({
          cartEntry: result
        });   
    });

    fetch('./data/cart.json')
      .then(response => response.json())
      .then(result => {
          this.setState({
            cart: result
          });   
    });
  }

  addProductToCart(product){
    if(product.stockQuantity > 0){  
      let tempProductList = this.state.listProducts;

      let products = tempProductList.map(item => {
        if(item.productId !== product.productId){
          return item;
        }
        item.stockQuantity = product.stockQuantity - 1;
        this.setState({
          stockQuantity: item.stockQuantity
        });
        return item;
      });
      
      this.setState({
        listProducts: products
      });

      this.updateCartEntry(product, true); 
    }
  }

  removeProductFromCart(product){
    let tempCart = this.state.cart;
    let cartItems = tempCart.items.filter(item =>  item.productName === product.productName);
    
    if(tempCart.total > 0 && cartItems.length > 0){  
      let tempProductList = this.state.listProducts;

      let products = tempProductList.map(item => {
        if(item.productId !== product.productId ){
          return item;
        }
        item.stockQuantity = product.stockQuantity + 1;
        this.setState({
          stockQuantity: item.stockQuantity
        });
        return item;
      });
      
      this.setState({
        listProducts: products
      });

      this.updateCartEntry(product, false); 
    }
  }

  updateCartEntry(product, isToAdd){
    let tempCartEntries = this.state.cartEntry;
    let cleanCartEntries = tempCartEntries.filter(item =>  item.productName !== "");

    let newCartEntry =  {
      cartEntryId: this.state.cartLastIndex,
      productName: product.productName,
      productQuantity: 1
    };
    
    let existingEntry =  cleanCartEntries.filter(item =>  item.productName === product.productName);
    
    if(existingEntry.length === 0){
      cleanCartEntries.push(newCartEntry);
      this.setState({
        cartEntry: cleanCartEntries,
        cartLastIndex: this.state.cartLastIndex + 1
      });
    } else {
      let updatedEntry = cleanCartEntries.map(item => {
        if(item.productName !== newCartEntry.productName){
          return item;
        }
        let addOrRemoveValue = (
          isToAdd ? item.productQuantity += 1 : item.productQuantity -= 1
          );
        this.setState({
          productQuantity: addOrRemoveValue
        });
        
        if(addOrRemoveValue === 0){
          item = without(item, product);
        }
        return item;
      });  

      this.setState({
        cartEntry: updatedEntry
      });
    }
    this.updateCart(newCartEntry, isToAdd);
  }

  updateCart(product, isToAdd) {
    let tempCart = this.state.cart;
    let index = tempCart.items.findIndex(item =>  item.productName === product.productName);
    let cartItem = tempCart.items[index];

    let addOrRemoveValue = (isToAdd ? tempCart.total += 1 : tempCart.total -= 1);

    if(index < 0){
      tempCart.items.push(product);
      this.setState({
        cart: tempCart
      });
    } else {
      this.setState({
        total: addOrRemoveValue
      });
    }
    
    if(index >= 0 && cartItem.productQuantity === 0){
      tempCart.items = without(tempCart.items, cartItem);
      this.setState({
        cart: tempCart
      });
    }
  }
  
  render() {
    return (
      <main className="page bg-white" id="petratings">
        <Cart cartEntry={this.state.cartEntry}
          cart ={this.state.cart} 
        />
        
        <ListProducts products={this.state.listProducts}
          removeProducts={this.removeProductFromCart}
          addProducts={this.addProductToCart}
        />  

      </main>
    );
  }
}

export default App;

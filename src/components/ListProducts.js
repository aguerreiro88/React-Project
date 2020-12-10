import React, {Component} from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa';

import DisplayStockLevelInfo from './DisplayStockLevelInfo';

class ListProducts extends Component {
   
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);       
    }

    handleClick(item, isToAdd) {
        let tempProduct = {
            productId: item.productId,
            productName: item.productName,
            productDescription: item.productDescription,
            stockQuantity: item.stockQuantity
        };
        if(isToAdd){
            this.props.addProducts(tempProduct);
        } else {
            this.props.removeProducts(tempProduct);
        }
    }
    
    render(){
        return(
            <div className="container">
                <section className="row">
                    <section className="col-12 item-list">
                        {this.props.products.map(item => (
                            <div className="row  mb-5" key={item.productId}>
                                <div className="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-3 d-flex align-items-stretch">
                                    <img src={item.imageURL}                                        
                                        alt={item.productDescription}
                                        title={item.productName}                                         
                                        className="img-fluid border border-secondary"
                                        />
                                </div> 
                                <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 ">
                                    <section className="p-2">
                                        <div className="product-head">
                                            <label>Name:</label>
                                            <span className="p-2">{item.productName}</span>
                                        </div>
                                        <div className="product-body">
                                            <label>Description:</label>
                                            <span className="p-2">{item.productDescription}</span>
                                        </div>
                                    </section>
                                    <section className="product-actions d-flex align-items-stretch">
                                        <div className="p-2">
                                            <button className="button-add-remove-product btn-primary "
                                                onClick={() => this.handleClick(item, true)}
                                                title="Add Product To Cart">
                                                <FaPlus/>
                                            </button>
                                        </div>
                                        <div className="p-2">
                                            <button className="button-add-remove-product btn-primary "
                                                onClick={() => this.handleClick(item, false)}
                                                title="Remove Product From Cart">
                                                <FaMinus/>
                                            </button>
                                        </div>
                                        <div className="p-2 d-flex align-items-stretch" title="Quantity in stock">
                                            <DisplayStockLevelInfo product={item}/> 
                                        </div>
                                    </section>
                                </div>
                            </div>  
                        ))}
                    </section> 
                </section> 
           </div>
        );
    }
}

export default ListProducts;
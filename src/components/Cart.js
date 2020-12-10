import React, {Component} from 'react';
import {FaShoppingCart} from 'react-icons/fa';

class Cart extends Component {
    render(){
        return(
            <section className="col-12 border-top border-bottom border-secondary mb-4">
                <div className="row cart-section" key={this.props.cart.cartId}>
                    <div className="container justify-content-center " align="center">
                            <FaShoppingCart/>
                            <span className="ml-2 items-badge badge badge-primary ">{this.props.cart.total}</span>
                            <label className="p-2 items-label">Items</label> 
                    </div>
                </div>
            </section> 
        );
    }
}
export default Cart;
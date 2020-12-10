import React, {Component} from 'react';

class DisplayStockLevelInfo extends Component {
    render(){
        let displayClassName = "pt-2 my-style badge ";

        if(this.props.product.stockQuantity >= 16){
            displayClassName += "badge-success";
        } else if(this.props.product.stockQuantity <= 15 && this.props.product.stockQuantity >= 6){
            displayClassName += "my-badge-yellow";
        }else if(this.props.product.stockQuantity <= 5 && this.props.product.stockQuantity >= 1){
            displayClassName += "my-badge-orange";
        }else if(this.props.product.stockQuantity === 0){
            displayClassName += "badge-danger";
        }
        return(
            <span className={displayClassName}>{this.props.product.stockQuantity}</span>
        );
    }
}

export default DisplayStockLevelInfo;
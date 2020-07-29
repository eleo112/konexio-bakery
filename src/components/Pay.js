import React from 'react';
// import Card from '../components/product/Card';

class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basket: [],
            total: 0,
            totalVat: 0,
            totalEcoTax: 0,
        };

        this.onClickProduct = this.onClickProduct.bind(this);

    }

    onClickProduct(name, price) {
        const total = this.state.total;
            total.push({
                name,
                price
            });
        this.setState({
            total
        });
    }

    render () {
        return(
            <div>
                {this.state.total}
            </div>
        );
    }
}

export default Pay;
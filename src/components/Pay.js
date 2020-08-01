import React from 'react';
import Card from '../components/product/Card';

class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basket: [],
            total: 0,
            // totalVat: 0,
            // totalEcoTax: 0,
        };

        this.onClickProduct = this.onClickProduct.bind(this);

    }

    onClickProduct({name, price}) {
        const total = this.state.total;
            total.push({
                name,
                price
            });
        this.setState({
            total: this.state.total + price
        });
    }

    render () {
        const {
            total
        } = this.state;
        return(
            <div className="col-12">
                <div className="row">
                    <h3>Total: {total}</h3>
                </div>
                <div className="row">
                    {this.props.items.map((item, index) => {
                        return (
                            <Card key={index}
                            onClick={this.onClickProduct}
                                // {...item}
                                item={item}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Pay;
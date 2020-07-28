import React from 'react';
import Slider from './core/Slider';
import Button from './core/Button'

class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          input: "",
          price: 1,
        };

        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangePrice(price) {
        this.setState({
            price
        });
    }

    onChangeInput(evt) {
        const input = evt.target.value;
        this.setState({
            input: input
        });
    }


    onSubmit() {
        // console.log('cmp/App#onSubmit');
        const {
            price,
            input
        } = this.state
        this.props.onSubmit(price, input);

    }

    render () {
        const {
            price
        } = this.state;
        return (
            <div className="col-12">
                    <input
                        placeholder="Item"
                        onChange={this.onChangeInput}/>
                    <Button
                        onClick={this.onSubmit}>
                            Add
                    </Button>
                <Slider 
                    max={10}
                    min={1}
                    value={price}
                    onChange={this.onChangePrice} />
            </div>
        );
    }
}

export default Add;
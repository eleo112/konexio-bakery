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

        this.onChange = this.onChange.bind(this);
    }

    onChange(val) {
        this.setState({
            input: val
        });
    }

    onSubmit() {
        this.props.onAdd(this.state.price);
    }

    render () {
        return (
            <div className="col-12">
                    <input type="text"
                        input={this.state.input}
                        name="Item"
                        onChange={(e) => this.onChange('input', e.target.value)}/>
                    <Button
                        onclick={this.onSubmit}>
                            Add
                    </Button>
                <Slider 
                    max={1}
                    min={10}
                    value={this.props.input}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

export default Add;
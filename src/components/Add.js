import React from 'react';
import Slider from './core/Slider';
import Button from './core/Button'

const minAdd = 1;
const maxAdd = 10;

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

    // onSubmit() {
        // onClick={this.props.price}
        // onClick={this.props.input}
    // }

    render () {
        return (
            <div className="col-12">
                    <input type="text"
                        input={this.state.input}
                        name="Item"
                        onChange={(evt) => this.onChange('add', evt.target.value)}/>
                    <Button>Add</Button>
                <Slider 
                    max={maxAdd}
                    min={minAdd}
                    value={this.props.input}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

export default Add;
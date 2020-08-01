import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Slider extends React.Component {
    render() {
        const {
            min,
            max,
            value,
            onChange
        } = this.props
        // console.log('core/Slider#render this.props', this.props);
        return(
            <div>
                <p>{value} €</p>
                <RCSlider 
                    max={max}
                    min={min}
                    value={value}
                    onChange={onChange} />
            </div>
        );
    }
}

export default Slider;
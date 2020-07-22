import React from 'react';

class Add extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          input: "",
          price: 1,
        };

        onChange(add, value) {

        }
    }

    render () {
        return (
            <div>
                <input onChange={(e) => this.onChange('add', e.target.value)} className="mr-2" value={add}/>
            </div>
        );
    }
}

export default Add;
import React from 'react';
import specimen from '../../specimen.jpg';
import Button from '../core/Button';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          source: "specimen",
        };

    }

    componentDidMount() {
        const {
            input
        } = this.props;
        const url = `http://konexio.codiscovery.co/bakery/api/?q=${input}`;
                
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    const source = json.source
                    this.setState({ 
                        source
                    });
                });
        }

    render () {
        const {
            source
        } = this.state;
        const {
            onClick,
            input,
            price
        } =this.props;
        return(
            <div className="col"
                style={{
                    width: 150
                }}>
                
                <Button
                    onClick={() => onClick({ price, name: input })}>
                    <img className="img-fluid" src={source} alt="image pastry"/>
                </Button>
            </div>
        );
    }
}

export default Card;
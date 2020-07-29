import React from 'react';
import 'specimen' from '../../specimen.jpg';
import Button from '../core/Button';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          source: "specimen",
        };

    }

    componentDidMount() {
            let url = 'http://konexio.codiscovery.co/bakery/api/?q=' 
                fetch(url, request)
                    .then(res => res.json())
                    .then(json => {
                        this.setState({ 
                            source: json.source,
                    });
                });
        }

    render () {
        return(
            <div>
                <Button></Button>
            </div>
        );
    }
}

export default Card;
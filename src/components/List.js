import React from 'react';

class List extends React.Component {
    render () {
        return(
            <div>
                <ul style={{
                    listStyle: 'none'
                }}>
                    {this.props.items.map((item, key) => {
                        return (
                            <li key={key}>
                                {item.input} - {item.price} €
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default List;
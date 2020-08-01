import React from 'react';

class List extends React.Component {
    render () {
        return(
            <div className="col-12">
                <ul style={{
                    listStyle: 'none'
                }}>
                    {this.props.items.map((item, index) => {
                        return (
                            <li key={index}>
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
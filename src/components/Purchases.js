import React from 'react';

const Purchases = (props) => {
    return (
        props.keys.map((object, key) => {
            return(
                <div className='Purchases'>
                    <span className='title'>{object.title}</span>
                    <span className='cost'>{object.cost}</span>
                    <button onClick={() => props.remove(key) }>Delete</button>
                </div>
            )
        })
    );
};

export default Purchases;
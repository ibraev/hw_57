import React from 'react';
import '../App.css';

const Additems = (props) => {
    return(
        props.foods.map((fill, key) => {
            return(
                <div className='foods' key={key}>

                </div>
            )}
        ))

};
export default Additems;
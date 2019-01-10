import React from 'react';

const FormItems = (props) => {
    return (
        <div className='Form-items'>
            <input type="text" placeholder="Item name"
                   value={props.title}
                   onChange={props.onChangeTitle}/>
            <input type="number"

                   placeholder="Cost"
                   value={props.cost}
                   onChange={props.onChangeCost}/>
            <button onClick={props.addItems}>Add</button>
        </div>
    );
};

export default FormItems;
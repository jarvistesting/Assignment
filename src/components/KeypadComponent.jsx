import React from 'react';

import {btnArr} from '../utils/utilities';

function KeypadComponent(props) {
    
    return (
        <div className="button">
            {
                btnArr.map((item, index) => {
                    return <button key={`calc_btn_${index}`} name={item.name} onClick={e => props.onClick(e.target.name)}>{item.text}</button>
                })
            }

            { props.isScientificMode ? (
                <>
                    <button 
                        name="flip" 
                        onClick={e => props.onClick(e.target.name)}
                    >
                        {'flip'}
                    </button>
                    <button 
                        name="square" 
                        onClick={e => props.onClick(e.target.name)}
                    >
                        {'square'}
                    </button>
                    <button 
                        name="sqrt" 
                        onClick={e => props.onClick(e.target.name)}
                    >
                        {'sqrt'}
                    </button><br/>
                </>
            ) : null }   
        </div>
    )
}

export default KeypadComponent;

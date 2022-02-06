import React from 'react';

const MySelect = () => {
    return (
        <div>
            <hr style={{marginTop:"10px"}}/>
            <select style={{marginTop:"10px"}}>
                <option value="value1">По названию</option>
                <option value="value1">По описанию</option>
            </select>
        </div>
    );
};

export default MySelect;
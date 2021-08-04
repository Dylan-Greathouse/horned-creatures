import React, { Component } from 'react';


class Dropdown extends Component {
    // state = {  }
    render() { 
        const { changeEvent, options, label } = this.props;
        return ( 
            <div className="select-options">
                <label>{label}</label>
                <select className="list" onChange={changeEvent}>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

         );
    }
}
 
export default Dropdown;
import React from 'react'
import './selectItem.styles.scss'

export  const SelectItem = ({label,options,handleChange,...otherProps}) =>(
    <div>
          <label >{label}</label>
          {<br/>}
        <select name={label.toLowerCase()} id={label.toLowerCase()} {...otherProps} onChange={handleChange}>
            {
                options.map((option) =>(
                    <option value={option.toLowerCase()}>{option}</option>
                ))
            }
        </select>
    </div>
)
    
export default SelectItem;
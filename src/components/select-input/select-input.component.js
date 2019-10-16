
import React from 'react';

const renderArrayOptions = (data)=>{    
    return data.map((val)=>{
        return(
            <option key={val.toString().toLowerCase()} value={val.toString().toLowerCase()}>{val}</option>
        )
    });
        
};

const renderObjectOptions = (data,p1,p2)=>{

    var index= []; 
    

    return data.map((val)=>{
        Object.keys(val).forEach((v,i)=>{
            if(v == p1){
            
             
                    index.push(i);
                
               
            }
    
            if(v == p2){
              
                    index.push(i);
                
    
            }

    
        });
    
        var newArr = index.filter(function(este, i) {
            return index.indexOf(este) === i;
        });

  

        return(
            <option key={val[Object.keys(val)[(Object.keys(val)[newArr[0]]==p1)?newArr[0]:newArr[1]]]} value={val[Object.keys(val)[(Object.keys(val)[newArr[1]]==p2)?newArr[1]:newArr[0]].toString().toLowerCase()]}>{val[Object.keys(val)[(Object.keys(val)[newArr[1]]==p2)?newArr[1]:newArr[0]]]}</option>
        )
    });
        
};


const SelectInput = ({isObjectArray,data,p1,p2,handleChange,...otherProps,})=>{
    return(
        <select {...otherProps} onChange={handleChange}>
            <option value="" defaultValue>Selecione Uma Opção</option>
            {
                (isObjectArray)?renderObjectOptions(data,p1,p2):renderArrayOptions(data)
            }
        </select>
    )
}
    


export default SelectInput;
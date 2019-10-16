import React from 'react'
import './addCategorie.styles.scss';
import {FormInput} from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';


 const AddCategory = ()=>{
    return(
        <div className='add_categorie'>
        <FormInput
         label={'Category Name'} 
         type={'text'}
         name={'catName'}
         id={'catName'} 
         />
         
         <CustomButton>Save Category</CustomButton>
    </div>

    )
 }
  

export default AddCategory;
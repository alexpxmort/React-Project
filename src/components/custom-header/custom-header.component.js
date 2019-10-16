import React,{Component}  from 'react'
import './custom-header.styles.scss';
import {connect} from 'react-redux'
import {changeEmail} from '../../redux/actions/AuthAction';
import SelectItem from '../selectItems/selectItem.component';

 class CustomHeader extends Component{

   
    render(){
        return(
            <div id="teste">
                <div>A fruta é : {this.props.email}</div>
                <SelectItem label={'Frutas'} options={["Maça","Banana","Pêra"]} handleChange={ (evt) => this.props.changeEmail(evt.target.value)}/>
                <button type="button" onClick={()=>this.props.changeEmail("ola kkk")}>hey click me</button>
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    const {email} = state.auth;
  return {
   email
  };
};


const  mapDispatchToProps = dispatch =>(
    {
        changeEmail:email => dispatch(changeEmail(email))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(CustomHeader)
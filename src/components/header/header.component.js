import React, { Component } from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from 'firebase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '..//cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/selectors/cart.selector'
import {selectCurrentUser} from '../../redux/selectors/auth.selector'
import {createStructuredSelector} from 'reselect'


class Header extends Component{
   
    render(){
        console.log(this.props);
        return(
            <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo  className='logo'/> 
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            {
                this.props.currentUser ? <FontAwesomeIcon icon={faUser} size={'2x'} />:
                    <FontAwesomeIcon icon={faKey} size={'2x'} /> 
            }

            {
                this.props.currentUser?
                <div className='option' onClick ={()=>auth().signOut()}>SIGN OUT</div>
                :<Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
            {this.props.hidden?null: <CartDropDown/>}
        </div>
    </div>
        )
    }
} 

 const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden,
 })
export default connect(mapStateToProps,{})(Header);
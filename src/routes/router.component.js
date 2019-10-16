import React, { Component } from   'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {HomePage} from '../pages/homepage/homepage.component';
import {ProdutosPage} from '../pages/produtospage/produtospage.component';
import NoticiasPage from '../pages/noticiaspage/noticiaspage.component';
import { ParceirosPage } from '../pages/parceirospage/parceirospage.component';
import Shop from '../pages/shop/shop.componenent';
import SignInAndSignUpPage from '../pages/sign-and-signup/signin-andsignup.component';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../redux/selectors/auth.selector'
import CheckoutPage from '../pages/checkout/checkout.component'
import AddCategory from '../pages/AddCategorie/addCategory.component';

class Router extends Component{
    render(){
        return(
            <div>
            <Switch>
                <Route exact component={HomePage} path="/"/>
                <Route  component={ProdutosPage} path="/produtos"/>
                <Route  component={NoticiasPage} path="/noticias" />
                <Route  component={ParceirosPage} path="/parceiros"/>
                <Route  component={Shop} path="/shop"/>
                <Route  component={AddCategory} path="/addCategory"/>
                <Route exact  component={CheckoutPage} path="/checkout"/>
                <Route path='/signin' exact render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)} />
    
            </Switch>
       </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
})
export default  connect(mapStateToProps,{})(Router)
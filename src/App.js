import React, { Component } from 'react';
import './App.css';
import Router from './routes/router.component';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/header.component';
import {auth} from 'firebase';
import { createUserProfileDocument, getCategories } from './firebase/firebase.utils';
import{connect} from 'react-redux';
import {setCurrentUser} from '../src/redux/actions/AuthAction';

  class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      currentUser:null,
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser}  =this.props;
    this.unsubscribeFromAuth =  auth().onAuthStateChanged(async user =>{

      if(user){
          const userRef = await createUserProfileDocument(user);
          

          userRef.onSnapshot(snapshot =>{
            setCurrentUser({
              currentUser:{
                id:snapshot.id,
              ...snapshot.data()
              }
            },()=>console.log(this.state))
          });
          
      }
        setCurrentUser(user);
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Router/>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App)

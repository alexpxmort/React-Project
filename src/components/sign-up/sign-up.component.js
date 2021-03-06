import React,{Component} from 'react'
import './sign-up.styles.scss';
import { FormInput } from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import{auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import Message from '../msg_alerts/msg-alerts.component';

 class SignUp extends Component{
    constructor(props){
        super(props);

        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = event =>{
        const {name,value} = event.target;

        this.setState({[name]:value});
    }

    handleSubmit = async  event =>{
        event.preventDefault();
        const {password,confirmPassword,displayName,email} = this.state;

        if(password!==confirmPassword){
            Message("Password don't match!","warning");
            return;
        }

        try{
            const{user} =await auth.createUserWithEmailAndPassword(email,password);
          await  createUserProfileDocument(user,{displayName});
        }catch(err){
            const{message} = err;
            Message(message,'warning');
        }

        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
          })
    }

    render(){
        const {confirmPassword,password,email,displayName} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange = {this.handleChange}
                    label={'Display Name'}
                    required
                    />

                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange = {this.handleChange}
                    label={'Email'}
                    required
                    />

                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange = {this.handleChange}
                    label={'Password'}
                    required
                    />

                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange = {this.handleChange}
                    label={'Confirm Password'}
                    required
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}


export default  SignUp;
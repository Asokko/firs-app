import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import is from 'is_js'
import axios from 'axios'
export default class Auth extends Component{
	state={
		isFormValid: false,
		formControls:{
			email:{
				value:'',
				type: 'email',
				errorMassage: 'Введите не корректный email',
				valid: false,
				touched: false,
				placeholder:'Email',
				validation:{
					required:true,
					email:true
				}
			},
			password:{
				value:'',
				type: 'password',
				errorMassage: 'Введите не корректный пароль',
				valid: false,
				touched: false,
				placeholder:'Password',
				validation:{
					required:true,
					minLenght:6
				}
			}
		}
	}

	loginHandler=async()=>{
		const authData ={
			email: this.state.formControls.email.value,
			password: this.state.formControls.password.value,
			returnSecureToken: true
		}
		try{
			const response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6CApli4_Hm7lyxNJy7oSZ_Ecwiim-2dk', authData)
			console.log(response.data)
		} catch (e){
			console.log(e)
		}
	}
	
	registerHandler=async()=>{
		const authData ={
			email: this.state.formControls.email.value,
			password: this.state.formControls.password.value,
			returnSecureToken:true
		}
		try{
			const response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6CApli4_Hm7lyxNJy7oSZ_Ecwiim-2dk', authData)
			console.log(response.data)
		} catch (e){
			console.log(e)
		}
	}


	submitHandler=(event)=>{
		event.preventDefault();
	}

	validateControl(value, validation){
		if(!validation){
			return true
		}
		let isValid=true

		if(validation.required){
			isValid=value.trim() !==''&& isValid
		}

		if(validation.email){
			isValid=is.email(value)&&isValid
		}
		if (validation.minLenght){
			isValid=value.length>=validation.minLenght && isValid
		}

		return isValid
	}
	onChangeHandler=(event, controlName)=>{
		console.log(`${controlName}: `, event.target.value)
		const formControls={...this.state.formControls}
		const control = {
			...formControls[controlName]
		}
		control.value=event.target.value
		control.touched=true
		control.valid=this.validateControl(control.value, control.validation)

		formControls[controlName]=control

		let isFormValid=true

		Object.keys(formControls).forEach(name=>{
			isFormValid=formControls[name].valid && isFormValid
		})

		this.setState({
			formControls, isFormValid
		})
	}
	renderInputs(){
		return Object.keys(this.state.formControls).map((controlName,index)=>{
			const control = this.state.formControls[controlName]
			return(
				<Input
					key={control+index}
					type={control.type}
					value={control.value}
					valid={control.valid}
					touched={control.touched}
					shouldValidate={!!control.validation}
					errorMassage={control.errorMassage}
					placeholder={control.placeholder}
					onChange={event=>this.onChangeHandler(event, controlName)}

				/>
			)
		})
	}
	render(){
		return(
			<div className={classes.Auth}>
				<div>
					<main className={classes.content}>
				 		<span className={classes.login}> Authorization</span>
				 		<form onSubmit={this.submitHandler} className={classes.formContent}>
				 			{this.renderInputs()}
				 			<Button name="Login" onClick={this.loginHandler} disabled={!this.state.isFormValid}/>
				 			<Button name="Signup" onClick={this.registerHandler} disabled={!this.state.isFormValid}/>
				 		</form>
				 	</main>
				</div>
			</div>
		);
	}
}
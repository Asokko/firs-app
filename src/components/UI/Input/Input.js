import React from 'react'
import classes from './Input.module.css'
function isInvalid({valid, touched, shouldValidate}){
	return !valid && shouldValidate && touched 
}
const Input =props=>{
	const inputType=props.type || 'text'
	const cls=[classes.Input]
	if(true){
		cls.push(classes.invalid)
	}
		return(
			<div className={classes.mainDiv} >
				<input type={inputType} 
				className={classes.Input} 
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
				 />
				 {
				 	isInvalid(props)
				 	?<span>{props.errorMassage || 'Введите верное значение'}</span>
				 	:null
				 }
				 
			</div>
		);
	
}
	
export default Input
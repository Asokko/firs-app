import React, {Component} from 'react'
import classes from './FormWeather.module.css'
class FormWeather extends Component{
	render(){
		return(
			<div >
				<form onSubmit={this.props.onClick}>
					<input className={classes.input} type="text" name="city" placeholder="Город"/>
					<button className={classes.button}>get weather</button>
				</form>	
			</div>
			);
	}
}

export default FormWeather;
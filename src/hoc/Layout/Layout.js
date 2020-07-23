import React, {Component} from 'react'
import classes from './Layout.module.css'
import Navigation from '../../components/Nav/Navigation/Navigation'
export default class Layout extends Component{
	
	render(){
		return(
			<div className = {classes.Layout}>
				<Navigation/>
				<main>{this.props.children}</main>
			</div>
		);
	}
}
 

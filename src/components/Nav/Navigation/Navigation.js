import React, {Component} from 'react'
import classes from './Navigation.module.css'
import {Link} from 'react-router-dom'

export default class Navigation extends Component{
	render (){
		return (
			<header className={classes.Navigation}>
				<nav className={classes.Nav}>
					<ul>
						<li className={classes.Link} ><Link to='/'>Auth</Link></li>
						<li className={classes.Link} ><Link to='/weather'>weather</Link></li>
					</ul>
				</nav>
			</header>
		)
	}
}
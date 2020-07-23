import React from 'react'
import classes from './WeatherCity.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const WeatherCity = props=>{
	return(
		<div className={classes.WeatherCity}>
			<Container className={classes.Container}>
				<Row className={classes.Row}>
					<Col className={classes.Col} md={3} sm={5} ><span>weather</span><br/>{props.main}</Col>
					<Col className={classes.Col} md={{span: 3, offset: 1}}
					sm={{span: 5, offset: 2}} ><span>description</span><br/>{props.description}</Col>
					<Col className={classes.Col} md={{span: 3, offset: 1}}
					 sm={5} ><span>temp</span><br/>{props.temp}<span> celsius</span></Col>				
				</Row>
				<Row className={classes.Row}>
					<Col className={classes.Col} md={3} sm={5} ><span>wind</span><br/>{props.speed}<span> m/s</span></Col>
					<Col className={classes.Col} md={{span: 3, offset: 1}} sm={{span: 5, offset: 2}} ><span>description</span><br/>{props.deg}<span> deg</span></Col>
					<Col className={classes.Col} md={{span: 3, offset: 1}} sm={5}><span>humidity</span><br/>{props.humidity}<span> %</span></Col>		
				</Row>
			</Container>
		</div>
		);
}

export default WeatherCity;
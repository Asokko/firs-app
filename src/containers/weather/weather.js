import React, {Component} from 'react'
import classes from './weather.module.css'
import FormWeather from '../../components/FormWeather/FormWeather'
import WeatherCity from '../../components/WeatherCity/WeatherCity'

const API_WEATHER_KEY='05be0e4daccc07a1ae5eea9214c24967'

class Weather extends Component{
	state={
		temp: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		speed: undefined,
		deg: undefined,
		dt:undefined,
		main: undefined,
		description: undefined,
		icon: undefined,
		error: undefined
	}	
	weatherHandler = async(e)=>{
		e.preventDefault();
		const city=e.target.elements.city.value;
		
		if(city){ 
			const api_url=await 
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_WEATHER_KEY}&units=metric`);
			const data = await api_url.json();
			console.log(data);

			this.setState({
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				speed: data.wind.speed,
				deg: data.wind.deg,
				dt:data.dt,
				main: data.weather[0].main,
				description: data.weather[0].description,
				icon: data.weather[0].icon,
				error: undefined
			});
		}else{}
		
	}
	render(){
		return(
			<div className={classes.weather}>
				<div>
					<main className={classes.content}>
						<FormWeather onClick={this.weatherHandler}/>
						<WeatherCity 
						temp={ this.state.temp}
							city={ this.state.city}
							country={this.state.country}
							humidity={this.state.humidity}
							speed={this.state.speed}
							deg={this.state.deg}
							dt={this.state.dt}
							main={this.state.main}
							description={this.state.description}
							icon={this.state.icon}/>
					</main>
				</div>	
			</div>
		);
	}
}

export default Weather
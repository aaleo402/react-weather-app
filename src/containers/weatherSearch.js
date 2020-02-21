import React, {Component} from 'react'
import SearchForm from '../components/SearchForm'
import Weather from '../components/Weather'

export default class WeatherSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      setCity: '',
      country: '',
      temp: '',
      hum: '',
      error: false,
      submitted: false
    }
  }
  handleOnSubmit = event => {
    event.preventDefault() 
    if (this.state.city !== this.state.setCity) {
    this.getWeather()
    this.setState({
      country: '',
      temp: '',
      hum: '',
      error: false,
      submitted: false,
      iconId: ""
    })
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  getWeather = async () => {
    const API_KEY = "e703a86a5d35a73258557568ace2f17e"
    const currentCity = this.state.city

    try {
      
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${API_KEY}`)
      if (!api_call.ok) {
        throw new Error("Network response was not ok")
      }
      
      const response = await api_call.json()
      
      this.setState({
        setCity: response.name,
        country: response.sys.country,
        temp: Math.round(response.main.temp),
        hum: response.main.humidity,
        submitted: true,
        iconId: response.weather[0].id,
      })
      
    } catch(e) {
      this.setState({
        error: true
      })
    }
  }

  render() {
    
    return (
      <div>
        <SearchForm
        handleOnSubmit={this.handleOnSubmit}
        handleOnChange={this.handleOnChange}
        errorMessage={this.state.error}
        />
        {
          this.state.submitted && !this.state.error 
          ? <Weather
            city={this.state.setCity}
            country={this.state.country}
            temp={this.state.temp}
            humidity={this.state.hum}
            iconId={this.state.iconId}
          />
          : null
        }
      </div>
    )
  }
}
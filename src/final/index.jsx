import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './final.scss';

const PLACES = [
    { name: "Palo Alto", zip: "94303" },
    { name: "San Jose", zip: "94088" },
    { name: "Santa Cruz", zip: "95062" },
    { name: "Honolulu", zip: "96803" },
    { name: "Kyiv", zip: "03134" },
    { name: "Hamburg", zip: "20038" },
    { name: "Bremen", zip: "28195" },
    { name: "Berlin", zip: "10317" },
    { name: "Vienna", zip: "1010" },
    { name: "Chieti", zip: "65026" },
    { name: "Varshawa", zip: "00-002" }



];

class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: null
        };
    }
    findCity() {

    }
    componentDidMount() {
        const zip = this.props.zip;
        const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
            zip +
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ weatherData: json });
        });
    }
    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>---Loading---</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        console.log(weatherData);
        return (
            <div className ='weather_here'>
                <div className='weather'>
                    <h1 className='weather__cityname'>
                        {weather.description} in {weatherData.name}
                        <img className='weather__cityweather' src={iconUrl} alt={weatherData.description} />
                    </h1>
                </div>
                <p className='citytemperature'>Current: {((weatherData.main.temp - 32) * (5 / 9)).toFixed(1)}°C</p>
                <p className='citytemperature'>High: {((weatherData.main.temp_max - 32) * (5 / 9)).toFixed(1)}°C</p>
                <p className='citytemperature'>Low: {((weatherData.main.temp_min - 32) * (5 / 9)).toFixed(1)}°C</p>
                <p className='citytemperature'>Wind Speed: {weatherData.wind.speed} mi/hr</p>
            </div>
        );
    }

}


export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePlace: 0,
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }
    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }


    render() {

        const activePlace = this.state.activePlace;

        return (
            <div className="App">
                <button className='btn' onClick={this.showMenu} >
                    Select City
                </button>
                {

                    this.state.showMenu
                        ? (
                            <ul className='list__menu'>
                                <li className='list__menu__item'>
                                    {PLACES.map((place, index) => (
                                        
                                        <div className='first'
                                            key={index}
                                            onClick={() => {
                                                this.setState({ activePlace: index });
                                            }}
                                        >
                                            {place.name}
                                        </div>
                                    ))}

                                </li>
                            </ul>
                        )
                        :
                        (
                            null
                        )
                }
                <div>
                    <WeatherDisplay
                        zip={PLACES[activePlace].zip}
                        key={activePlace}
                    />
                </div>

            </div>
        );

    }

}
ReactDOM.render(

    <App />,
    document.querySelector('#root')

)


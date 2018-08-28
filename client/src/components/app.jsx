import React from 'react';
import Header from './Header.jsx';
import axios from 'axios';
import ebKey from '../../../keys'
import Event from './Event.jsx'

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      eventType: "",
      location: "",
      events:[],
    }
  }

  eventTypeChange = (e) => {
    this.setState ({eventType: e.target.value}) 
 }
  locationChange = (e) => {
    this.setState({location: e.target.value})
 }

  getEvents = () => {
    axios.get('https://www.eventbriteapi.com/v3/events/search/', {
      params: {
        q: this.state.eventType,
        sort_by: 'best',
        'location.address': this.state.location,
        'location.within': '15mi',
        price:'free',
        'start_date.keyword':'today',
      },
      headers: {
        Authorization: `Bearer ${ebKey}`,
      },
    })
      .then((response) => {
        console.log(window.location)
        this.setState({events:response.data.events});
      })
      .catch((error) => {
        console.log(error);
      })

  }

  render () {
    return (
      <div>
        <Header eventTypeChange={this.eventTypeChange} locationChange={this.locationChange} getEvents={this.getEvents}/>
        {!this.state.events.length &&
        <img className="home-logo" src="./logo_transparent.png" alt="logo"/>
        }
        <div>
          {this.state.events.map(event => {
            return <Event event={event} />
          })}
        </div>
      </div>
    )
  }
}

export default App;
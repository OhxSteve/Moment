import React from 'react';

class Header extends React.Component {
  constructor (props){
    super(props);
    this.state = {

    }
  }




  render () {
    return (
      <div>
        <a href="localhost:1337">Moment</a>
        <span>Find</span>
        <input type="text" name="search" onChange={this.props.eventTypeChange}/>
        <span>Location</span>
        <input type="text" name="location" onChange={this.props.locationChange}/>
        <button type="button" onClick={this.props.getEvents}>&#x1F50D;</button>
      </div>
    )
  }
}

export default Header;